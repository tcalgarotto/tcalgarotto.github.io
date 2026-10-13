# Thales Calgarotto

Portfólio publicado em https://tcalgarotto.github.io/.

A página principal usa HTML, CSS e JavaScript. Tem conteúdo em português e inglês, temas claro e escuro, badges verificáveis e uma faixa com 15 ferramentas. O crachá 3D do bloco Hero 44 inicia automaticamente depois da primeira renderização. Uma camada transparente cobre a tela inteira, mantém a âncora na hero e permite puxar o crachá pelo conteúdo, com rolagem na borda durante o arraste. A imagem estática mantém a apresentação disponível sem WebGL. Seu código e instruções de build estão em `interactive-card-source/`.

## Preview local

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

## Conteúdo e fontes

- DuckDooh: https://duckdooh.com. Next.js, Python/FastAPI, PostgreSQL, Asaas e Yodeck.
- OrtoClean: https://ortoclean.duckdns.org/login-teste. Fastify, PostgreSQL, Docker e JavaScript.
- Previews: capturas reais das interfaces públicas e da conta Demo da OrtoClean, sem registros de pacientes. A demo estava vazia na captura.
- Certificações: IBM RAG and Agentic AI e Google IT Automation with Python. O Google mantém o recorte transparente e a IBM mantém a arte original com fundo branco. Os dois badges usam as imagens selecionadas pelo titular e levam às credenciais públicas do Coursera.
- Certificações: uma única grade compacta de oito credenciais, em duas linhas e quatro colunas no desktop e duas colunas no celular. Os seis recortes transparentes foram fornecidos pelo titular; cada badge mantém seu link de verificação.
- Rodapé: adaptado do Shadcn Studio Footer Component 11 (https://shadcnstudio.com/blocks/marketing-ui/footer-component), com a composição original, selo vermelho e ícones oficiais do bloco. Assinatura manuscrita decorativa “Thales” criada como PNG transparente a partir da referência visual. Os cinco ícones levam ao GitHub, ao e-mail e ao LinkedIn fornecidos pelo titular, à DuckDooh e à demo OrtoClean. X não é exibido.
- Fontes: Space Grotesk e IBM Plex Mono; ícones Phosphor e Simple Icons. Assets e licenças hospedados localmente em `assets/`.
- Hero: referência Shadcn Studio Hero 44, adaptada com um monograma enquanto a fotografia não é fornecida. Atribuição do componente em `interactive-card-source/README.md` e no código.

Para alterar os textos, atualize `index.html` e as traduções em `app.js`. O conteúdo permanece legível sem JavaScript. Preferências ficam apenas no navegador; a página não usa analytics ou formulários.
