# Ving Tsun: A System Guide

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

📖 **Read online / Leia online:** [vingtsun.thluiz.com](https://vingtsun.thluiz.com)

---

## Português

Livro/site sobre como o treinamento de Ving Tsun 詠春 desenvolve naturalmente o pensamento sistêmico.

Autor: **Thiago Silva (Moy Chi Yau Si 梅 知 友 士)**, Mestre de Ving Tsun da família Moy Jo Lei Ou (clã Moy Yat Sang, linhagem Moy Yat de Ving Tsun Kung Fu). Discípulo do Mestre Senior Julio Camacho.

**Idioma de escrita:** PT-BR. A versão EN é tradução pendente — capítulos em `src/content/docs/en/capitulos/` ainda são esqueletos.

**Estado dos capítulos** (snapshot):

| Cap | Título | Estado |
|-----|--------|--------|
| 00 | Prefácio | ~90% |
| 01 | Kung Fu | ~65% |
| 02 | Sistema Ving Tsun | ~40% |
| 03 | Arte da Lista | esqueleto |
| 04 | Pensamento Sistêmico | esqueleto |
| 05 | VT como Educador Sistêmico | esqueleto |
| 06 | Vida Kung Fu / Sam Faat | esqueleto |
| 07 | Família Kung Fu | esqueleto |
| 08 | VT Guia Sistêmico | esqueleto |
| 09 | Conclusão | esqueleto |

Histórico de conteúdo: [`CONTENT-CHANGELOG.md`](CONTENT-CHANGELOG.md). Decisões editoriais e técnicas: [`PROJECT-CHANGELOG.md`](PROJECT-CHANGELOG.md).

---

## English

A book/site on how Ving Tsun 詠春 training naturally develops systems thinking.

Author: **Thiago Silva (Moy Chi Yau Si 梅 知 友 士)**, Ving Tsun Master from the Moy Jo Lei Ou family (Moy Yat Sang clan, Moy Yat lineage of Ving Tsun Kung Fu). Disciple of Senior Master Julio Camacho.

**Writing language:** PT-BR. The EN version is a pending translation — chapter files in `src/content/docs/en/capitulos/` are still stubs.

See [`CONTENT-CHANGELOG.md`](CONTENT-CHANGELOG.md) for the content history. Editorial and technical decisions live in [`PROJECT-CHANGELOG.md`](PROJECT-CHANGELOG.md).

---

## Estrutura / Structure

```
src/content/docs/
├── pt-br/capitulos/      # capítulos em português (versão ativa)
│   ├── 00-prefacio.md
│   ├── 01-kung-fu.md
│   ├── ...
│   └── Glossário.md      # termos chineses + pessoas
└── en/capitulos/         # English chapters (translation pending)

.claude/context/          # writing conventions loaded by the Claude agent
                          # (transliteration, voice, family/lineage…)
fontes/                   # research sources (gitignored)
```

## Comandos / Commands

| Comando / Command | Ação / Action |
|-------------------|----------------|
| `npm install`     | Instala dependências / Install dependencies |
| `npm run dev`     | Dev server em / on `localhost:4321` |
| `npm run build`   | Build em / to `./dist/` |
| `npm run preview` | Preview do build / Preview the build |

## Tech

Astro + Starlight. Bilingual via Starlight i18n. Deploy: S3 + CloudFront.
