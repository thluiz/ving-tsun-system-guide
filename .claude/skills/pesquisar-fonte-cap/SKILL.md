---
name: pesquisar-fonte-cap
description: Pesquisa e atribui fontes bibliográficas a uma afirmação ou trecho do capítulo em edição. Adiciona footnote no .mdx, entrada na Bibliografia do Glossário, e propõe notas Scholion para figuras substantivas. Aplica ghost-writer com passe estrutural visível. Use quando precisar embasar uma afirmação não-trivial no livro.
argument-hint: "[trecho da prosa ou afirmação a embasar]"
---

# Pesquisar fonte para capítulo

Skill que orquestra o fluxo de pesquisa → atribuição → propagação de referência no projeto Ving Tsun System Guide.

Trabalho **incremental por sessão**: uma referência por vez, não batch. Atualiza sempre o capítulo em edição + a Bibliografia do glossário.

## Inputs

- **Argumento**: o trecho ou afirmação a embasar (em `$ARGUMENTS`).
- **Capítulo de trabalho**: identificar via `git status` o `.mdx` mais recentemente modificado em `src/content/docs/pt-br/capitulos/`. Se houver dúvida, perguntar.

## Fluxo

### 1. Search-first no Scholion (vault)

Buscar em `E:/scholion/content/notes/` por temas, autores e termos relacionados (`Grep`/`Glob`). Listar matches relevantes com 1 linha de contexto cada. Se houver nota correlata, considerar:
- Linkar a partir da footnote ou da nova nota Scholion
- Cross-reference em vez de duplicar

### 2. WebSearch acadêmico

Mínimo 1 busca, refinar query se primeira não trouxer. Estratégia:
- Primeira busca: termos do trecho + autor potencial + palavras-chave (ex: "Chin Wu academy 1909 history")
- Segunda busca (se necessária): refinar para autor específico ou obra (ex: "Kennedy Guo Jingwu transformed kung fu")

Priorizar: livros acadêmicos publicados, papers, university press, Wikipedia para visão geral.

### 3. Honest report

Reportar achados **e gaps**. Se não encontrou fonte que sustente:
- Dizer claramente "não achei fonte que sustente X"
- **Source-or-silence**: nunca fabricar atribuição
- Sugerir alternativas: omitir a afirmação, generalizar, marcar como observação não-atribuída ou pesquisa pendente

### 4. Verificação cruzada

Confirmar que a fonte realmente cita ou sustenta a afirmação específica, não só toca no tema. Tomar nota de citações exatas, datas, páginas se disponíveis.

### 5. Propor edits

Apresentar antes de aplicar. Sempre os 2 mínimos:

a. **Footnote no `.mdx` do capítulo**:
   - Inline: `[^id]` no fim da frase
   - Definição: `[^id]: Autor, *Título*. Editora, ano. <comentário opcional>` no fim do arquivo (depois das Asides de Encontros, em ordem de aparição)

b. **Entrada na Bibliografia** em `src/content/docs/pt-br/capitulos/Glossário.mdx → # Bibliografia`:
   - Formato: `**Sobrenome, Nome.** *Título* (ideograma, se aplicável). Editora, cidade, ano.`
   - Inserir em ordem alfabética por sobrenome

c. **Opcional — Nota Scholion** se a figura/conceito for substantivo:
   - Delegar a skill `add-scholion-note` (separada)
   - Cross-link com notas existentes do Scholion encontradas no passo 1

### 6. Passe estrutural ghost-writer obrigatório como artefato visível

Antes de apresentar **qualquer prosa gerada** (footnote, glosa, edição inline, nota Scholion), output explícito:

```
Passe estrutural: ✓ #8 (travessão: 0) · ✓ #12 (negativa indireta: 0) · ✓ #17 (tagline: 0) · ✓ #22 (aforismo clever: 0) · ✓ #25 (três batidas: 0)
```

Se algum teste falhar, **corrigir antes de mostrar**. Se o usuário precisar perguntar "ghost-writer nisso?", o artefato falhou — a disciplina é exatamente produzir o passe ativamente, não declarar pass sem aplicar.

Ver `~/.claude/skills/ghost-writer/SKILL.md` para os 33 testes completos. Os 5 acima são os mais críticos (estruturais, escapam de check lexical).

### 7. Aplicar edits

Após aprovação do usuário, aplicar:
1. `Edit` no `.mdx` do capítulo (inline footnote ref + definição)
2. `Edit` no `Glossário.mdx` (Bibliografia)
3. (opcional) `add-scholion-note` para nota nova

### 8. Build verify

```bash
cd E:/ving-tsun-system-guide && npm run build 2>&1 | tail -3
```

Se build falhar, abortar e investigar antes de seguir.

### 9. Commit + push (opcional)

Apenas se o usuário pedir explicitamente. Mensagem do commit:
- Linha curta descrevendo a afirmação embasada (~50 chars)
- Sem trailer `Co-Authored-By: Claude` (ghost-writer rule #9)

Exemplo: `Footnote Chin Wu (Kennedy & Guo, 2010) no cap 01`

## Regras invioláveis

- **Source-or-silence**: nunca fabricar fonte. Se não há fonte verificável, dizer.
- **Ghost-writer estrutural sempre visível** antes de mostrar prosa. Sem atalho.
- **Incremental por sessão**: uma referência por vez. Não batch de múltiplas referências numa só rodada.
- **Capítulo atual**: identificar pelo `git status` (`.mdx` mais recentemente modificado em `capitulos/`) ou perguntar se ambíguo.
- **Verificação cruzada**: a fonte sustenta a afirmação específica, não só toca no tema.

## Exemplos de uso

```
/pesquisar-fonte-cap "essa relação será conectada em definitivo pela academia Chin Wu"
```
→ Skill busca → acha Kennedy & Guo (2010) → propõe footnote `[^kennedy-guo]` no cap atual + entrada Bibliografia → passe ghost-writer → aprovação → aplica → build verify.

```
/pesquisar-fonte-cap "primeiro registro ocidental de Kung Fu por jesuítas no século XVIII"
```
→ Skill busca → acha Amiot 1779 (Notice du Cong-Fou) → propõe footnote + Bibliografia + sugere nota Scholion sobre Amiot (cross-link com notas pinyin existentes) → aprovação → aplica.

```
/pesquisar-fonte-cap "Tang Hao identificou 15 técnicas idênticas no Taijiquan"
```
→ Skill busca → confirma Tang Hao (década 1930) → propõe footnote + entrada Bibliografia → passe ghost-writer → aprovação.
