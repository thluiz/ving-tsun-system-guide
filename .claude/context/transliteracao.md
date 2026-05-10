# Transliteração de termos chineses

No corpo dos capítulos, termos chineses aparecem como **transliteração da família + ideograma** (ex: "Mou Seut 武術", "Kung Fu 功夫"). Ideograma fica inline na primeira ocorrência do termo no capítulo.

Pinyin e jyutping (jiutping) ficam **apenas no `Glossário.md`** ao final do livro, junto com a transliteração da família, ideograma e definição.

## Por quê

O autor estava usando o padrão "Kung Fu 功夫 (Gōngfu / gung1 fu1)" inline e isso prejudicava o ritmo de leitura. Decidiu enxugar o corpo e centralizar a referência fonética no glossário. A transliteração da família vem do trabalho do Si Suk Leonardo Mordente (registrado no Prefácio, seção "Transliterações") e tem precedência sobre pinyin/jyutping no texto corrente. Quando não houver transliteração canônica da família, usar a aproximação mais próxima do som real baseada no jyutping.

## Como aplicar

- Ao redigir/editar capítulos: remover pinyin/jyutping inline. Manter transliteração da família + ideograma na primeira menção; só transliteração nas demais.
- **Ideogramas sempre entre parênteses inline.** Ex: "Mou Seut (武術)", "Kung Fu (功夫)", "Si Suk (師叔)". Os parênteses marcam visualmente o caractere e evitam ambiguidade com pontuação adjacente. Aplica em headers e corpo. Quando o ideograma aparecer sozinho no fluxo (sem transliteração antes), inverter: "(功) Kung" → "Kung (功)".
- **Sonorização inline para o leitor ocidental**: quando o headword no corpo for uma tradução em português (não a transliteração da família), anexar a transliteração da família em parênteses, sem espaço, logo após o ideograma. Ex: `Pessoa 人(Jan) vs Humano 仁(Jan)`. Quando o headword já for a transliteração da família, não precisa repetir.
- Ao editar `Glossário.md`: cada entrada precisa de transliteração da família, pinyin, jyutping, ideograma e (quando aplicável) breve definição. Quando o termo isolado pode ter outras leituras contextuais, o headword leva o composto entre parênteses para disambiguar (ex: `Kuen (Ving Tsun Kuen)`, `To (Siu Nim Do)`, `To (Ving Tsun Kuen To)`).
- Estrutura do `Glossário.md`: duas seções, `# Chinês` (termos) e `# Pessoas` (mestres da família, sinólogos, historiadores — alfabético, sem subdivisão). Bibliografia é seção separada do livro, não entra no glossário.
- Não inserir pinyin/jyutping inline em rascunhos novos — ofender o ritmo é o problema que essa convenção resolve.

## Quando montar/atualizar o glossário

- **Durante a escrita**: sempre que um termo chinês novo aparecer no corpo de um capítulo, adicionar entrada em `Glossário.mdx` na hora — não acumular pendências.
- **Ao final de cada capítulo**: varrer o capítulo recém-fechado e garantir que todo termo chinês citado tem entrada no glossário (transliteração da família, pinyin, jyutping, ideograma, definição).
- O glossário é incremental e evolutivo — não precisa ficar pronto antes de escrever; ele cresce junto com os capítulos.

## Footnotes e Bibliografia

- Referências bibliográficas (livros, artigos, manuscritos citados nos capítulos) usam **footnotes GFM**: `[^id]` inline + `[^id]: ...` no fim do arquivo `.mdx`.
- **Toda nova footnote bibliográfica deve ter entrada correspondente em `Glossário.mdx` → `# Bibliografia`**, em ordem alfabética por sobrenome do autor.
- Formato da entrada: `**Sobrenome, Nome.** *Título* (ideograma, se aplicável). Editora, cidade, ano.`
- Mantém footnote no capítulo (acesso rápido na nota inline) + bibliografia consolidada no final (visão geral por autor).
