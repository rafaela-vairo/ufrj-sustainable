# mnv-projeto



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type     | Default                |
| ---------------- | ------------------ | ----------- | -------- | ---------------------- |
| `projButton`     | `proj-button`      |             | `string` | `'Ver mais'`           |
| `projImg`        | `proj-img`         |             | `string` | `undefined`            |
| `projImgLegenda` | `proj-img-legenda` |             | `string` | `'Foto: Arthur Moaes'` |
| `projText`       | `proj-text`        |             | `string` | `'Texto'`              |
| `projTitle`      | `proj-title`       |             | `string` | `'Título'`             |


## Dependencies

### Used by

 - [mnv-expositor](../mnv-expositor)

### Depends on

- [mnv-title](../../../typography/mnv-title)
- [mnv-paragraph](../../../typography/mnv-paragraph)
- [mnv-button](../../../inputs/mnv-button)

### Graph
```mermaid
graph TD;
  mnv-projeto --> mnv-title
  mnv-projeto --> mnv-paragraph
  mnv-projeto --> mnv-button
  mnv-title --> mnv-overline
  mnv-expositor --> mnv-projeto
  style mnv-projeto fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
