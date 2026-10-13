# Crachá interativo

O componente de crachá vem do bloco `@ss-blocks/hero-section-44`, instalado pelo Shadcn CLI a pedido do titular. Referência: https://shadcnstudio.com/preview/blocks/base/marketing-ui/hero-section/hero-section-44.

O source original identifica a implementação como adaptada do exemplo Lanyard do React Bits (MIT + Commons Clause). Essa atribuição foi preservada em `src/id-card.tsx`. O componente não é vendido como biblioteca ou serviço de componentes.

Adaptações: câmera de tela inteira alinhada à âncora da hero, arraste sem recorte pela coluna, corda que acompanha puxadas longas, retorno amortecido e rolagem na borda, modelo GLB em arquivo separado, assets locais, integração com o tema da página e callbacks de carregamento. O visual estático continua disponível; o bundle 3D carrega automaticamente após a apresentação inicial da página, sem botão de ativação ou desativação. A física é pausada enquanto a aba está oculta.

```sh
npm ci
npm run build
```

O build produz `../assets/interactive-card/card.js` e chunks. O diretório também contém o modelo e as imagens usados pelo componente. A imagem `portrait.svg` é o monograma do titular, reservado para a fotografia que ele enviará.
