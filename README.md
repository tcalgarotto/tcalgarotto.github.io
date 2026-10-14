# Thales Calgarotto

Meu portfólio: https://tcalgarotto.github.io/

Engenharia de software, automação e inteligência artificial aplicada. Trabalhos selecionados e certificações, em português e inglês, com tema claro e escuro.

## Prévia local

Na raiz do repositório, execute `python3 -m http.server 8000` e abra `http://localhost:8000`. O site é estático; o conteúdo editorial não precisa de um build. O crachá interativo tem seu próprio source e build em `interactive-card-source/`.

A tradução engloba conteúdo, rótulos acessíveis, metadados e dados estruturados. As URLs `?lang=pt` e `?lang=en` selecionam o idioma explicitamente.

## Projetos

- [DuckDooh](https://duckdooh.com/)
- [OrtoClean](https://ortoclean.duckdns.org/login-teste)

## Créditos

- Hero e rodapé adaptados do [Shadcn Studio](https://shadcnstudio.com/).
- Fontes Space Grotesk e IBM Plex Mono; ícones Phosphor e Simple Icons.

## Performance e movimento

O conteúdo é HTML estático, com fontes locais e imagens em WebP. O CSS editorial contém apenas os estilos usados na página. As animações de entrada mantêm o conteúdo visível desde o início e respeitam movimento reduzido. O crachá mantém a física original. Antes de o WebGL renderizar, uma prévia completa com corda e prendedor usa a mesma textura, pose inicial e projeção do modelo. O módulo e os assets são pré-carregados, e a prévia só desaparece após a cena pintar. O build gera essa prévia a partir da arte atual.

O rodapé aplica o padrão `SiteFooterReveal` da DuckDooh: página opaca acima de um rodapé sticky, com opacidade, escala e desfoque guiados pela parte revelada. Movimento reduzido desativa esses efeitos; telas mais baixas que o rodapé usam fluxo normal. O selo continua no eixo horizontal da página, com textos de cada lado.

As oito certificações ficam em uma única grade compacta de duas linhas por quatro colunas no desktop, com os seis recortes transparentes fornecidos pelo titular.
