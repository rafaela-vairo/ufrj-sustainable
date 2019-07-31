# mnv-title

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `level`    | `level`    |             | `string` | `undefined` |
| `overline` | `overline` |             | `string` | `undefined` |

## Dependencies

### Used by

- [mnv-about](....\sections\mnv-about)
- [mnv-bignumbers](....\sections\mnv-bignumbers)
- [app-home](....\app-pages\app-home)
- [mnv-card](....\layout\mnv-card)
- [mnv-footer](....\layout\mnv-footer)
- [mnv-hero](....\layout\mnv-hero)

### Depends on

- [mnv-overline](..\mnv-overline)

### Graph

```mermaid
graph TD;
  mnv-title --> mnv-overline
  mnv-about --> mnv-title
  mnv-bignumbers --> mnv-title
  app-home --> mnv-title
  mnv-card --> mnv-title
  mnv-footer --> mnv-title
  mnv-hero --> mnv-title
  style mnv-title fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
