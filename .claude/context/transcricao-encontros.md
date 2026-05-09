# Transcrição dos encontros do Programa de Mestrado

Atividade recorrente: transcrever vídeos longos (2GB+) dos encontros para servir de matéria-prima à escrita dos capítulos.

## Como aplicar

- Vídeos ficam em `fontes/<No> encontro programa de mestrado/`
- Usar `faster-whisper` com modelo `large-v3` em ambiente WSL com GPU
- Extrair áudio com ffmpeg antes de transcrever
- Salvar transcrição na mesma pasta do vídeo original
- Após transcrição, sumarizar por sessão/fala para alimentar os capítulos relevantes
- Skill: `/transcrever-encontro`
