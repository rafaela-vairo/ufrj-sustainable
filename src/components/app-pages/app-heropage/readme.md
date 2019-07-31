# app-heropage

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `match`  | --        |             | `MatchResults` | `undefined` |

## Dependencies

### Depends on

- [mnv-base](....\layout\mnv-base)
- [mnv-navbar](....\navigation\mnv-navbar)
- [mnv-mob-menu](....\navigation\menu-mobile\mnv-mob-menu)
- [mnv-hero](....\layout\mnv-hero)
- [mnv-bg](....\mnv-bg)
- [mnv-about](....\sections\mnv-about)
- [mnv-list-card](....\mnv-list-card)
- [mnv-bignumbers](....\sections\mnv-bignumbers)

### Graph

```mermaid
graph TD;
  app-heropage --> mnv-base
  app-heropage --> mnv-navbar
  app-heropage --> mnv-mob-menu
  app-heropage --> mnv-hero
  app-heropage --> mnv-bg
  app-heropage --> mnv-about
  app-heropage --> mnv-list-card
  app-heropage --> mnv-bignumbers
  mnv-navbar --> mnv-navbutton
  mnv-mob-menu --> mnv-mob-button
  mnv-mob-menu --> mnv-mob-drawer
  mnv-hero --> mnv-grid
  mnv-hero --> mnv-title
  mnv-hero --> mnv-button
  mnv-title --> mnv-overline
  mnv-about --> mnv-grid
  mnv-about --> mnv-title
  mnv-about --> mnv-paragraph
  mnv-list-card --> mnv-grid
  mnv-list-card --> mnv-card
  mnv-card --> mnv-title
  mnv-card --> mnv-subtitle
  mnv-card --> mnv-divider
  mnv-card --> mnv-paragraph
  mnv-card --> mnv-button
  mnv-bignumbers --> mnv-grid
  mnv-bignumbers --> mnv-title
  mnv-bignumbers --> mnv-bignumber
  mnv-bignumber --> mnv-grid
  style app-heropage fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
