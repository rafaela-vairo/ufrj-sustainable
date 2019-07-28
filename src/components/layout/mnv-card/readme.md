# mnv-card



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default     |
| ----------- | ----------- | ----------- | -------- | ----------- |
| `button`    | `button`    |             | `string` | `undefined` |
| `cardtitle` | `cardtitle` |             | `string` | `undefined` |
| `overline`  | `overline`  |             | `string` | `undefined` |
| `subtitle`  | `subtitle`  |             | `string` | `undefined` |


## Dependencies

### Depends on

- [mnv-title](..\..\typography\mnv-title)
- [mnv-subtitle](..\..\typography\mnv-subtitle)
- [mnv-divider](..\..\typography\mnv-divider)
- [mnv-paragraph](..\..\typography\mnv-paragraph)
- [mnv-button](..\..\inputs\mnv-button)

### Graph
```mermaid
graph TD;
  mnv-card --> mnv-title
  mnv-card --> mnv-subtitle
  mnv-card --> mnv-divider
  mnv-card --> mnv-paragraph
  mnv-card --> mnv-button
  mnv-title --> mnv-overline
  style mnv-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
