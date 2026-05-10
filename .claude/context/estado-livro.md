# Estado do livro

## O que é

Livro/site "Ving Tsun: A System Guide". Tese: o treinamento de Ving Tsun desenvolve naturalmente pensamento sistêmico. Site Astro/Starlight bilíngue (PT-BR/EN) em `vingtsun.thluiz.com`, deploy S3+CloudFront.

## Estado dos capítulos (snapshot 2026-05-10)

| Cap | Título | Palavras | Estado | Observações |
|-----|--------|---------:|--------|-------------|
| 00 | Prefácio | 891 | ~90% | Falta: fechar fontes/referências (autores listados sem obras+anos), direções de leitura concretas |
| 01 | Kung Fu | 2 102 | ~65% | Abertura fechada com 4 fontes acadêmicas. Falta: revisão refs nas seções restantes, Yun Nui (provavelmente 玄女), citação Moy Yat sobre artes Mou |
| 02 | Sistema Ving Tsun | 1 674 | ~40% | Framework Leibniz/Descartes/Bertalanffy. Muito esqueleto TODO. Falta: 6 domínios, etimologia, genealogia, denominação |
| 03 | Arte da Lista | 132 | Esqueleto | — |
| 04 | Pensamento Sistêmico | 139 | Esqueleto | — |
| 05 | VT como Educador Sistêmico | 152 | Esqueleto | — |
| 06 | Vida Kung Fu / Sam Faat | 167 | Esqueleto | — |
| 07 | Família Kung Fu | 161 | Esqueleto | — |
| 08 | VT Guia Sistêmico | 159 | Esqueleto | — |
| 09 | Conclusão | 97 | Esqueleto | — |
| — | Glossário | 1 441 | Em construção | Termos VT, pessoas (com ideogramas), bibliografia |
| **Total** |  | **7 115** | | ~28 páginas (a 250 palavras/página) |

> Verificar contra os arquivos atuais antes de tomar decisões — este snapshot pode estar defasado.

## Fontes principais

- `fontes/` — PDFs, transcrições, artigos do projeto
- PDFs: Hai Tong por Moy Yat, Ving Tsun Kuen Sut, Systems Thinking comparativo, Arte da Lista
- Transcrições dos encontros do Programa de Mestrado (matéria-prima viva)
- Entrevistas, artigos filosóficos (Jullien, Peimin Ni)
- Scholion e Silvae — pesquisas paralelas do autor

## Encontros do Programa de Mestrado

Reuniões de mestres conduzidas por Si Fu Julio Camacho. Fonte primária para o livro.
- I Encontro: transcrito, usado no Cap 1
- II Encontro: transcrito, integrado no Cap 2 (commit 2026-04-02)
- III Encontro (17/04/2026): transcrito e sumarizado em 2026-04-18. 2h17min, 2752 segmentos. Sumário JSON em `fontes/3o encontro programa de mestrado/sumario-encontro3.json`. Temas: Kung Fu (processo vs resultado, aretê, marcialidade vs luta), humanidade, utilitarismo, relação Si Fu–To Dai

## Fluxo de trabalho

1. Encontros geram gravações (MP4)
2. Transcrição via faster-whisper GPU (skill `/transcrever-encontro`)
3. Sumarização via vox-intelligence
4. Escrita dos capítulos com ghost-writer — preservar a voz do autor
5. Citações de mestres (Si Fu, Si Gung, Si Taai Gung) são legítimas mesmo sem fonte bibliográfica formal
6. Cada encontro alimenta múltiplos capítulos. Após transcrição/sumarização, integrar pontos como itens numerados sob `## *Encontros de Mestrado*` → `### *N Encontro (data)*`. Formato: `##` itálico para título da seção, `###` itálico com numeral romano para cada encontro.
