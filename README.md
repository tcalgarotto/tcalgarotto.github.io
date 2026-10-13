# Thales Calgarotto

Portfólio publicado em https://tcalgarotto.github.io/.

A página principal usa HTML, CSS e JavaScript. Tem conteúdo em português e inglês, temas claro e escuro, badges verificáveis e uma faixa com 15 ferramentas. O crachá 3D do bloco Hero 44 é carregado somente ao clicar em “Interagir com o crachá”; a imagem estática mantém a apresentação disponível sem WebGL. Seu código e instruções de build estão em `interactive-card-source/`.

## Preview local

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

## Conteúdo e fontes

- DuckDooh: https://duckdooh.com. Next.js, Python/FastAPI, PostgreSQL, Asaas e Yodeck.
- OrtoClean: https://ortoclean.duckdns.org/login-teste. Fastify, PostgreSQL, Docker e JavaScript.
- Previews: capturas reais das interfaces públicas e da conta Demo da OrtoClean, sem registros de pacientes. A demo estava vazia na captura.
- Certificações: credenciais públicas do Coursera e badges da carteira Credly do titular.
- Fontes: Space Grotesk e IBM Plex Mono; ícones Phosphor e Simple Icons. Assets e licenças hospedados localmente em `assets/`.
- Hero: referência Shadcn Studio Hero 44, adaptada com um monograma enquanto a fotografia não é fornecida. Atribuição do componente em `interactive-card-source/README.md` e no código.

Para alterar os textos, atualize `index.html` e as traduções em `app.js`. O conteúdo permanece legível sem JavaScript. Preferências ficam apenas no navegador; a página não usa analytics ou formulários.
