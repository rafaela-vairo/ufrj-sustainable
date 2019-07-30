# app-heropage



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `match`  | --        |             | `MatchResults` | `undefined` |


## Dependencies

### Depends on

- [mnv-base](..\..\layout\mnv-base)
- [mnv-navbar](..\..\navigation\mnv-navbar)
- [mnv-mob-menu](..\..\navigation\menu-mobile\mnv-mob-menu)
- [mnv-hero](..\..\layout\mnv-hero)
- [mnv-bg](..\..\mnv-bg)
- [app-about](..\..\sections\app-about)
- [mnv-list-card](..\..\mnv-list-card)
- [app-bignumbers](..\..\sections\app-bignumbers)

### Graph
```mermaid
graph TD;
  app-heropage --> mnv-base
  app-heropage --> mnv-navbar
  app-heropage --> mnv-mob-menu
  app-heropage --> mnv-hero
  app-heropage --> mnv-bg
  app-heropage --> app-about
  app-heropage --> mnv-list-card
  app-heropage --> app-bignumbers
  mnv-navbar --> mnv-navbutton
  mnv-mob-menu --> mnv-mob-button
  mnv-mob-menu --> mnv-mob-drawer
  mnv-hero --> mnv-grid
  mnv-hero --> mnv-title
  mnv-hero --> mnv-button
  mnv-title --> mnv-overline
  app-about --> mnv-grid
  app-about --> mnv-title
  app-about --> mnv-paragraph
  mnv-list-card --> mnv-grid
  mnv-list-card --> mnv-card
  mnv-card --> mnv-title
  mnv-card --> mnv-subtitle
  mnv-card --> mnv-divider
  mnv-card --> mnv-paragraph
  mnv-card --> mnv-button
  app-bignumbers --> mnv-grid
  app-bignumbers --> mnv-title
  app-bignumbers --> mnv-bignumber
  mnv-bignumber --> mnv-grid
  style app-heropage fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
