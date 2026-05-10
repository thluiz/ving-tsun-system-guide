# Project Changelog · Decisões Editoriais e Técnicas

Histórico de decisões de **estrutura editorial, convenções, ferramental e infra** do projeto. Mudanças no texto/conteúdo do livro ficam em [`CONTENT-CHANGELOG.md`](CONTENT-CHANGELOG.md).

---

## 2026-05 · Convenções editoriais e infra de pesquisa

- **2026-05-10** Skill local `pesquisar-fonte-cap` versionada em `.claude/skills/`. Orquestra pesquisa → footnote no `.mdx` → entrada na Bibliografia do Glossário → notas Scholion correlatas. Aplica passe estrutural ghost-writer como artefato visível obrigatório. [`14800cb`]
- **2026-05-10** `.claude/STATE.md` para retomada de sessão entre conversas. Documenta capítulo em edição, ponto de parada, prioridades da próxima sessão e pendências sinalizadas. Referenciado em `CLAUDE.md` como primeiro arquivo a ler. [`14800cb`]
- **2026-05-10** Migração de capítulos `.md` → `.mdx`. Permite uso de componentes JSX (`<Aside>`) para distinguir scaffolding de conteúdo permanente. [`b37c57b`]
- **2026-05-10** Convenção `<Aside type="caution">` para conteúdo temporário (TODOs, encontros do Programa de Mestrado, esqueletos). Renderizado como caixa visível no site para flagar trabalho-em-andamento. Tudo dentro de Aside é candidato a remoção na versão final. [`b37c57b`]
- **2026-05-10** Convenção `:::tip` / `:::note` (admonitions Starlight nativas) para conteúdo permanente (notas explicativas, fontes, contexto de longo prazo). Nunca dentro de Aside. [`b37c57b`]
- **2026-05-10** CSS snippet em `.obsidian/snippets/aside.css` para Obsidian renderizar `<aside>` MDX como caixa visível durante edição local. [não versionado, fica no vault Obsidian do autor]
- **2026-05-10** Footnotes GFM (`[^id]`) no corpo dos capítulos com definição no fim do arquivo `.mdx`. Toda nova footnote bibliográfica espelha em `Glossário.mdx → # Bibliografia` em ordem alfabética por sobrenome. [`b37c57b`]
- **2026-05-10** Convenção: ideogramas chineses sempre em parênteses inline (ex: `Mou Seut (武術)`, `Si Suk (師叔)`) para evitar ambiguidade com pontuação adjacente e marcar visualmente o caractere. [`b37c57b`]
- **2026-05-10** Distinção institucional documentada em `.claude/context/familia-linhagem.md`: Linhagem Moy Yat de Ving Tsun Kung Fu (tradição genealógica encabeçada por Si Taai Gung Moy Yat) vs Moy Yat Ving Tsun (obra/escola criada por ele). Não confundir. [`1689c82`]
- **2026-05-10** Hierarquia de 3 níveis institucionais explicitada: Família Moy Jo Lei Ou ⊂ Clã Moy Yat Sang ⊂ Linhagem Moy Yat de Ving Tsun Kung Fu. [`eba60b0`]
- **2026-05-10** README bilíngue (PT/EN) na raiz, documentando autor, projeto, idioma de escrita ativa, pendências de tradução. [`b7d614a`]
- **2026-05-10** `CONTENT-CHANGELOG.md` criado para registrar mudanças de conteúdo do livro (separado deste). [`b7d614a`]
- **2026-05-10** `.claude/context/transliteracao.md` consolidado com convenções de transliteração da família, footnotes/Bibliografia, ideogramas em parênteses, sonorização inline. [vários commits]

## 2026-04 · Setup visual e UX

- **2026-04-19** Pesquisa com `/`, banner de atualização, ajustes visuais. [`6040fe9`, `dd61657`]
- **2026-04-18** Redesign visual: paleta MJLO (Moy Jo Lei Ou), fontes Crimson Pro + DM Sans. [`bf89acc`]
- **2026-04-17** Deploy migrado para S3 + CloudFront (vingtsun.thluiz.com). [`288bafc`, `b6cf66a`]

## 2026-03 · Setup inicial

- **2026-03-29** Projeto inicializado: Astro Starlight com i18n PT-BR/EN. [`532bf04`]
