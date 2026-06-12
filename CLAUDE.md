# Ving Tsun System Guide

Livro/site bilíngue (PT-BR/EN) Astro+Starlight. Tese: o treinamento de Ving Tsun desenvolve naturalmente pensamento sistêmico. Autor: Thiago Silva (Moy Chi Yau Si).

## Retomar sessão

**Primeiro arquivo a ler:** `.claude/STATE.md` — capítulo em edição, último ponto de parada, pendências, candidatos para próximas sessões. Atualizar ao fim de cada sessão produtiva.

## Voz

Qualquer redação que vá sair em nome do autor — corpo de capítulos, posts, glosas, recados, parágrafos avulsos, substituições de TODO — invocar a skill `ghost-writer` via `Skill("ghost-writer")` **antes** de redigir. Sem exceção de tamanho: um parágrafo de duas linhas exige o mesmo invoke que um capítulo inteiro.

**Declarar verbalmente que "passou pelo ghost-writer" sem ter invocado a skill via tool não conta.** O checklist estrutural de 33 itens só é aplicado quando o SKILL.md está carregado no contexto pela invocação da tool.

## Carregar sob demanda

Os arquivos abaixo são contexto persistente do projeto. Carregar quando o gatilho aparecer.

- Editando capítulos / glossário, qualquer termo chinês → `.claude/context/transliteracao.md`
- Citando família, linhagem ou clã → `.claude/context/familia-linhagem.md`
- Grafia de termos VT (Si Fu, To Dai, Ving Tsun…) → `.claude/context/grafia-termos.md`
- Estado dos capítulos, fontes, encontros → `.claude/context/estado-livro.md`
- Escrevendo nota Scholion sobre fala de mestre no encontro → `.claude/context/notas-encontro-mestrado.md`
- Pesquisa de referências, fontes, citações → `.claude/context/pesquisa-referencias.md`
- Paleta de cores, design do site → `.claude/context/paleta-mjlo.md`
- Transcrição de encontros do Programa de Mestrado → `.claude/context/transcricao-encontros.md`

## Convenções de comunicação

- PT-BR sempre. Nunca PT-EU.
- "Família Moy Jo Lei Ou" (grupo imediato) ≠ "Linhagem Moy Yat de Ving Tsun Kung Fu" (tradição). Nunca "clã Moy Yat".
- Termos VT com espaço: Si Fu, To Dai, Si Hing, Si Gung, Si Taai Gung, Ving Tsun (não Wing Chun).
