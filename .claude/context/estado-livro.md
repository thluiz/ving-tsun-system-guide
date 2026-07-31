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
