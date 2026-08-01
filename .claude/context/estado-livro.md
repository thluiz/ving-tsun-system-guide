# Estado do livro

## O que é

Livro/site "Ving Tsun: A System Guide". Tese: o treinamento de Ving Tsun desenvolve naturalmente pensamento sistêmico. Site Astro/Starlight bilíngue (PT-BR/EN) em `vingtsun.thluiz.com`, deploy S3+CloudFront.

## Estrutura (remontada em 2026-08-01)

O livro converge para a arquitetura de nove capítulos que o Si Fu definiu no IV Encontro. **A espinha é invariante** — os capítulos 1 a 6 se repetem na edição que for escrita daqui a sete ou doze anos, e a diferença entre as duas leituras é o que se mede. **O capítulo 7 é o slot renovável**, com o título do autor.

| Cap | Título | Tipo | Estado |
|-----|--------|------|--------|
| 00 | Introdução | — | ~90% |
| 01 | Kung Fu | objetivo | ~65% |
| 02 | Sistema | objetivo | Esqueleto + prosa herdada |
| 03 | O Sistema Ving Tsun | objetivo | ~40% |
| 04 | Vida-Kung Fu — Sam Faat | subjetivo | Esqueleto |
| 05 | Família Kung Fu | subjetivo | Esqueleto |
| 06 | Genealogia | subjetivo | Esqueleto |
| 07 | Ving Tsun como Guia Sistêmico | livre | Esqueleto + prosa herdada |
| 08 | Conclusão | — | Esqueleto |
| — | Glossário | apêndice | Em construção |

### Regra de escrita que decorre da comparabilidade

**Fenômeno nos capítulos 2 e 3, nome no capítulo 7.** Os capítulos objetivos descrevem no vocabulário da própria casa: a ordem altera o produto, o Biu Ji muda como se vê o Siu Nim Tau, tirar um dos seis elementos muda a identidade do sistema. O capítulo 7 chega depois e nomeia o que já foi mostrado. Se o arcabouço ocidental vier antes, a tese vira tautologia — você entrega a moldura e depois mostra que a moldura serve.

Corolário: Leibniz, Descartes, Bertalanffy, Deleuze/Guattari, Checkland, Meadows e WSR ficam no capítulo 7. Nada disso pode fazer carga estrutural na espinha, senão a comparação de doze anos mede a troca de arcabouço em vez do amadurecimento do autor.

O capítulo 7 se escreve como posição datada, com atribuição e fronteiras nomeadas, e fecha dizendo o que não cobriu.

### O que mudou nesta remontagem

- Antigo 02 se partiu em 02 (Sistema), 03 (Sistema Ving Tsun), 06 (Genealogia) e 07 (arcabouço ocidental)
- Antigo 03 (Arte da Lista) foi absorvido pelo 02 — é leitura chinesa de sistema, não teoria de sistemas
- Antigos 04, 05 e 08 colapsaram no 07
- Antigo 07 se partiu em 05 (Família) e 06 (Genealogia)
- Prefácio virou Introdução
- Arquivos EN passaram a usar os mesmos slugs do pt-br. O Starlight casa tradução por caminho de arquivo, e antes disso cada capítulo gerava rota duplicada em `/en/` (fallback em português + esqueleto inglês órfão)

> Costuras pendentes estão marcadas com Asides "Costura pendente" dentro dos capítulos 02, 03, 06 e 07. Prosa do autor foi movida intacta, sem reescrita.

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
- III-A Encontro (24/04/2026): 34min, sem Si Fu. Pauta administrativa (ferramentas de escrita, transliteração, prazos, 108 páginas do livro coletivo, visita do Si Fu, pins). Nota Scholion completa: `iiia-encontro-mestrado.md`. Rendeu 2 itens no cap 06 e 3 no cap 07, integrados em 2026-07-31
- III-B Encontro (01/05/2026): 1h08, sem Si Fu. Transcrito em `fontes/04 - Programa de Mestrado/`, com resumo de WhatsApp do autor. Sem nota Scholion própria; gerou `bebe-vermelho.md` (03/05). Integrado em 2026-07-31 nos caps 01, 04, 06 e 07. Temas: excelência como hábito, componentes de 功夫, erro incidental vs conceitual, IA que fabrica fonte, compartilhamento como condição da pesquisa, genealogia não compilada
- IV Encontro (03/07/2026): com Si Fu. MP4 em `fontes/05 - Programa de Mestrado/` (não transcrito, e não precisa). Fonte redigida: post do Silvae `v-encontro-programa-de-mestrado/index.md`, "IV Encontro do Programa de Mestrado: escrever para legar" (04/07). Integrado em 2026-07-31 nos caps 02, 04, 06 e 07

> **Numeração.** Encontros com Si Fu levam numeral romano (I, II, III, IV). Os encontros semanais entre alunos, sem Si Fu, recebem sufixo de letra a partir do último encontro maior: III-A (24/04), III-B (01/05). Convenção vinda da nota `iiia-encontro-mestrado.md` do próprio autor.

## Arquitetura do livro definida pelo Si Fu (IV Encontro, 03/07/2026)

Vale para os livros do Programa de Mestrado, pensada para que sejam comparáveis entre si. Nove capítulos:

- Introdução
- Três **objetivos**: Kung Fu, Sistema, Sistema Ving Tsun. Têm definição, tradução, ideograma. O do Sistema Ving Tsun tende a ser o mais extenso dos três
- Três **subjetivos**: Vida Kung Fu, Família Kung Fu, Genealogia. Aqui cada autor diz coisa diferente, e o Si Fu vê a divergência como riqueza
- Um **sétimo** com o título de cada autor, espaço livre onde se pode inclusive desdizer as separações que o Si Fu propôs, desde que se tenha entendido a proposta antes
- Conclusão

> A estrutura atual deste livro (prefácio + 9 capítulos) não é a mesma. Decidir se converge para o desenho do Si Fu ou se mantém o recorte próprio — pendência aberta.

## Fluxo de trabalho

1. Encontros geram gravações (MP4)
2. Transcrição via faster-whisper GPU (skill `/transcrever-encontro`)
3. Sumarização via vox-intelligence
4. Escrita dos capítulos com ghost-writer — preservar a voz do autor
5. Citações de mestres (Si Fu, Si Gung, Si Taai Gung) são legítimas mesmo sem fonte bibliográfica formal
6. Cada encontro alimenta múltiplos capítulos. Após transcrição/sumarização, integrar pontos como itens numerados sob `## *Encontros de Mestrado*` → `### *N Encontro (data)*`. Formato: `##` itálico para título da seção, `###` itálico com numeral romano para cada encontro.
