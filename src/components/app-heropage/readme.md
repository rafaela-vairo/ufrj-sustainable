# app-heropage



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `match`  | --        |             | `MatchResults` | `undefined` |


## Dependencies

### Depends on

- [mnv-navbar](..\mnv-navbar)
- [mnv-hero](..\mnv-hero)

### Graph
```mermaid
graph TD;
  app-heropage --> mnv-navbar
  app-heropage --> mnv-hero
  mnv-navbar --> stencil-route-link
  mnv-navbar --> mnv-navbutton
  mnv-hero --> mnv-grid
  mnv-hero --> mnv-title
  mnv-hero --> mnv-button
  mnv-title --> mnv-overline
  style app-heropage fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
