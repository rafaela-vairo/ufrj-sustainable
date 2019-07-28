# mnv-title



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `level`    | `level`    |             | `string` | `undefined` |
| `overline` | `overline` |             | `string` | `undefined` |


## Dependencies

### Used by

 - [app-about](..\..\sections\app-about)
 - [app-bignumbers](..\..\sections\app-bignumbers)
 - [app-home](..\..\app-pages\app-home)
 - [mnv-card](..\..\layout\mnv-card)
 - [mnv-footer](..\..\layout\mnv-footer)
 - [mnv-hero](..\..\layout\mnv-hero)

### Depends on

- [mnv-overline](..\mnv-overline)

### Graph
```mermaid
graph TD;
  mnv-title --> mnv-overline
  app-about --> mnv-title
  app-bignumbers --> mnv-title
  app-home --> mnv-title
  mnv-card --> mnv-title
  mnv-footer --> mnv-title
  mnv-hero --> mnv-title
  style mnv-title fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
