# mnv-navbar



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type     | Default |
| ---------- | ----------- | ----------- | -------- | ------- |
| `setClass` | `set-class` |             | `string` | `' '`   |


## Dependencies

### Used by

 - [app-heropage](..\..\app-pages\app-heropage)
 - [app-home](..\..\app-pages\app-home)

### Depends on

- stencil-route-link
- [mnv-navbutton](..\mnv-navbutton)

### Graph
```mermaid
graph TD;
  mnv-navbar --> stencil-route-link
  mnv-navbar --> mnv-navbutton
  app-heropage --> mnv-navbar
  app-home --> mnv-navbar
  style mnv-navbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
