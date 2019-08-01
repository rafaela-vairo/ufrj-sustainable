# mnv-expositor



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type     | Default            |
| ----------------- | ------------------ | ----------- | -------- | ------------------ |
| `projects`        | --                 |             | `any[]`  | `projects`         |
| `sectionImg`      | `section-img`      |             | `string` | `section.img`      |
| `sectionSubtitle` | `section-subtitle` |             | `string` | `section.subtitle` |
| `sectionTitle`    | `section-title`    |             | `string` | `section.title`    |


## Dependencies

### Used by

 - [app-heropage](../../../app-pages/app-heropage)

### Depends on

- [mnv-grid](../../../layout/mnv-grid)
- [mnv-title](../../../typography/mnv-title)
- [mnv-projeto](../mnv-projeto)

### Graph
```mermaid
graph TD;
  mnv-expositor --> mnv-grid
  mnv-expositor --> mnv-title
  mnv-expositor --> mnv-projeto
  mnv-title --> mnv-overline
  mnv-projeto --> mnv-title
  mnv-projeto --> mnv-paragraph
  mnv-projeto --> mnv-button
  app-heropage --> mnv-expositor
  style mnv-expositor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
