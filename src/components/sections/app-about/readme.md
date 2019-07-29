# app-about



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------- | ----------- | ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maintext`  | `maintext`  |             | `string` | `'A Universidade Federal do Rio de Janeiro (UFRJ) é a maior federal do Brasil e a primeira instituição oficial de ensino superior do país, em atividade desde 1792 e organizada como estrutura universitária em 1920. Com ótimas colocações em rankings acadêmicos nacionais e internacionais, a Universidade fará 100 anos em 2020. Atualmente, é a quarta instituição que mais produz ciência no Brasil, desenvolvendo em todos os seus campi pesquisas de ponta em diversas áreas de tecnologias sustentáveis: energia solar, novos combustíveis, agroecologia, conservação ambiental, reciclagem, eficiência hídrica, entre outros.'` |
| `maintitle` | `maintitle` |             | `string` | `'Sobre a UFRJ'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `width`     | `width`     |             | `number` | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |


## Dependencies

### Depends on

- [mnv-grid](..\..\layout\mnv-grid)
- [mnv-title](..\..\typography\mnv-title)
- [mnv-paragraph](..\..\typography\mnv-paragraph)
- [mnv-slider](..\..\mnv-slider)

### Graph
```mermaid
graph TD;
  app-about --> mnv-grid
  app-about --> mnv-title
  app-about --> mnv-paragraph
  app-about --> mnv-slider
  mnv-title --> mnv-overline
  mnv-slider --> mnv-slide
  mnv-slider --> mnv-card
  mnv-card --> mnv-title
  mnv-card --> mnv-subtitle
  mnv-card --> mnv-divider
  mnv-card --> mnv-paragraph
  mnv-card --> mnv-button
  style app-about fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
