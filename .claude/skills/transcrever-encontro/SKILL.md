---
name: transcrever-encontro
description: Transcreve vídeo de um encontro de mestres de kung fu usando faster-whisper com GPU. Extrai áudio via ffmpeg e gera transcrição com timestamps e segmentação por falante. Invoque quando o usuário pedir para transcrever um MP4/vídeo de encontro ou reunião.
argument-hint: "[caminho do vídeo ou número do encontro]"
---

Transcreve um vídeo de encontro do Programa de Mestrado usando **faster-whisper** com aceleração GPU na distro WSL **HermesTools**.

## Parâmetros

O argumento pode ser:
- Caminho completo do arquivo MP4
- Número do encontro (ex: `3`) — nesse caso, procurar o MP4 em `fontes/<N>o encontro programa de mestrado/`

Se nenhum argumento fornecido, listar os MP4 disponíveis em `fontes/` e perguntar qual transcrever.

## Processo

### 1. Localizar o vídeo

```bash
# Buscar MP4 na pasta fontes/
find "E:/ving-tsun-system-guide/fontes/" -name "*.mp4" -type f
```

Confirmar com o usuário qual arquivo transcrever se houver mais de um.

### 2. Transferir vídeo para dentro da WSL

**IMPORTANTE:** As distros WSL NÃO montam discos Windows (OneDrive, E:, etc. são inacessíveis via `/mnt/`). Usar pipe via Git Bash:

```bash
cat "C:/Users/conta/OneDrive/Kung Fu/ving-tsun-guide-fontes/<pasta>/video.mp4" | wsl -d HermesTools -- bash -c "cat > /home/hermes/transcricoes/encontroN.mp4"
```

- Usar `run_in_background` pois arquivos são grandes (2GB+)
- Diretório de trabalho: `/home/hermes/transcricoes/`

### 3. Extrair áudio com ffmpeg

Executar na distro **HermesTools** após o vídeo estar em `/home/hermes/transcricoes/`.

```bash
wsl -d HermesTools -- bash -c "ffmpeg -i /home/hermes/transcricoes/encontroN.mp4 -vn -acodec pcm_s16le -ar 16000 -ac 1 /home/hermes/transcricoes/encontroN.wav -y"
```

- `-vn`: sem vídeo
- `-ar 16000`: sample rate 16kHz (ideal para Whisper)
- `-ac 1`: mono

### 4. Transcrever com faster-whisper

**IMPORTANTE:** O Toscanini já possui um worker robusto em `/home/hermes/services/toscanini/priv/whisper_worker.py` com GPU lock, fallback CPU, progress tracking. Para transcrições avulsas, usar o script simplificado abaixo com o venv e LD_LIBRARY_PATH:

```bash
export LD_LIBRARY_PATH=/home/hermes/whisper-venv/lib/python3.10/site-packages/nvidia/cublas/lib:/home/hermes/whisper-venv/lib/python3.10/site-packages/nvidia/cudnn/lib:$LD_LIBRARY_PATH
source /home/hermes/whisper-venv/bin/activate
```

Criar e executar um script Python na HermesTools:

```python
from faster_whisper import WhisperModel

model = WhisperModel("large-v3", device="cuda", compute_type="float16")

segments, info = model.transcribe(
    "/home/hermes/transcricoes/encontroN.wav",
    language="pt",
    beam_size=5,
    word_timestamps=True,
    vad_filter=True,
    vad_parameters=dict(
        min_silence_duration_ms=500,
        speech_pad_ms=200,
    ),
)

print(f"Idioma detectado: {info.language} (prob: {info.language_probability:.2f})")
print(f"Duração: {info.duration:.0f}s")
print("---")

with open("/mnt/DRIVE/path/to/transcricao.txt", "w", encoding="utf-8") as f:
    for seg in segments:
        h, rem = divmod(int(seg.start), 3600)
        m, s = divmod(rem, 60)
        timestamp = f"[{h:02d}:{m:02d}:{s:02d}]"
        line = f"{timestamp} {seg.text.strip()}"
        print(line)
        f.write(line + "\n")
```

**Parâmetros importantes:**
- `device="cuda"`: usar GPU (RTX 3050, 6GB VRAM)
- `compute_type="float16"`: otimiza uso de VRAM
- `language="pt"`: português (idioma dos encontros)
- `vad_filter=True`: remove silêncios longos
- Modelo `large-v3`: melhor qualidade disponível
- Usar `run_in_background` e `timeout=600000` — transcrições de 2h+ levam 20-40 min

### 5. Copiar resultado para pasta fonte

Após transcrição, copiar o TXT de volta para a pasta original no Windows:

```bash
wsl -d HermesTools -- cat /home/hermes/transcricoes/encontroN.transcricao.txt > "C:/Users/conta/OneDrive/.../encontroN.transcricao.txt"
```

Nome: mesmo do MP4 com extensão `.transcricao.txt`

### 6. Limpeza

- Remover MP4 e WAV de `/home/hermes/transcricoes/` após cópia bem-sucedida
- Manter apenas o TXT final na pasta fontes

### 7. Pós-transcrição

Informar ao usuário:
- Duração total do áudio
- Número de segmentos transcritos
- Caminho do arquivo de transcrição
- Perguntar se deseja um sumário por sessão/fala

## Armadilhas conhecidas (LEIA ANTES DE EXECUTAR)

### Encoding UTF-8
- **NUNCA usar PowerShell para pipear texto UTF-8 para/de WSL** — corrompe acentos sistematicamente (é → ├⌐)
- Para transferir texto: usar Git Bash (`cat file | wsl ...`) ou gerar o arquivo diretamente dentro do WSL
- Para transferir binários (MP4, WAV): usar `robocopy` via UNC `\\wsl.localhost\HermesTools\path`
- A transcrição DEVE ser gerada e salva dentro do WSL (`/home/hermes/transcricoes/`). Depois copiar para Windows com Git Bash, não PowerShell

### CUDA / GPU
- O `faster-whisper` instalado via pip global NÃO tem libs CUDA — usar o venv `/home/hermes/whisper-venv/`
- **Obrigatório** exportar `LD_LIBRARY_PATH` antes de rodar (as libs cublas/cudnn estão no venv, não no sistema):
  ```bash
  export LD_LIBRARY_PATH=/home/hermes/whisper-venv/lib/python3.10/site-packages/nvidia/cublas/lib:/home/hermes/whisper-venv/lib/python3.10/site-packages/nvidia/cudnn/lib:$LD_LIBRARY_PATH
  source /home/hermes/whisper-venv/bin/activate
  ```
- Sem isso, dá `RuntimeError: Library libcublas.so.12 is not found`

### WSL e mounts
- As distros WSL NÃO montam discos Windows (OneDrive, E:, G: são inacessíveis via `/mnt/`)
- Para copiar MP4 para dentro do WSL: `cat "windows/path" | wsl -d HermesTools -- bash -c "cat > /dest"` (do Git Bash)
- Para copiar de volta: `wsl -d HermesTools -- cat /src > "windows/path"` (do Git Bash)

### Processos background
- `nohup` dentro de `wsl -d ... -- bash -c "nohup ..."` NÃO persiste — o processo morre quando o caller sai
- Usar `run_in_background` no Bash tool com o comando WSL completo e `timeout=600000`

## Notas técnicas

- **VRAM**: O modelo large-v3 usa ~3-4GB VRAM em float16. A RTX 3050 tem 6GB, suficiente.
- **Tempo estimado**: ~1/10 da duração do áudio com GPU (~21 min para 2h17min).
- **Fontes via symlink**: `fontes/` aponta para `C:\Users\conta\OneDrive\Kung Fu\ving-tsun-guide-fontes`.
- **Cache do modelo**: O modelo large-v3 já está cacheado em `/home/hermes/.cache/huggingface/hub/models--Systran--faster-whisper-large-v3/` na HermesTools (usado pelo Toscanini). Não precisa baixar.
