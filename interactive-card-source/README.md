# Crachá interativo

O componente de crachá vem do bloco `@ss-blocks/hero-section-44`, instalado pelo Shadcn CLI a pedido do titular. Referência: https://shadcnstudio.com/preview/blocks/base/marketing-ui/hero-section/hero-section-44.

O source original identifica a implementação como adaptada do exemplo Lanyard do React Bits (MIT + Commons Clause). Essa atribuição foi preservada em `src/id-card.tsx`. O componente não é vendido como biblioteca ou serviço de componentes.

Adaptações: câmera de tela inteira alinhada à âncora da hero, arraste sem recorte pela coluna, corda que acompanha puxadas longas, soltura física do componente original e rolagem na borda, modelo GLB em arquivo separado, assets locais, integração com o tema da página e callbacks de carregamento. O visual estático continua disponível; o bundle 3D carrega automaticamente após a apresentação inicial da página, sem botão de ativação ou desativação. A física é pausada enquanto a aba está oculta.

```sh
npm ci
npm run build
```

O build produz `../assets/interactive-card/card.js` e chunks. O diretório também contém o modelo e as imagens usados pelo componente. A imagem `portrait.svg` é o monograma do titular, reservado para a fotografia que ele enviará.

O comportamento de soltura usa o mecanismo original: somente o cartão se torna cinemático enquanto é segurado; os três segmentos da corda permanecem dinâmicos. Soltar troca o cartão diretamente para `dynamic`, deixando o impulso, a gravidade, as três juntas de corda e a junta esférica determinarem o balanço e a rotação. Não há retorno programado, pose alvo ou redefinição de velocidades na soltura.

A interpolação visual da corda é exponencial e estável em frames lentos. O repouso usa amortecimento e sleep; a estabilização de yaw não desperta corpos adormecidos.

O build também atualiza os identificadores de conteúdo do módulo, do JavaScript principal, do CSS e dos badges nos URLs da página. Isso evita servir versões anteriores pelo cache após uma atualização.
