# app-about



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default           |
| ----------- | ----------- | ----------- | -------- | ----------------- |
| `maintext`  | `maintext`  |             | `string` | `abouttext.text`  |
| `maintitle` | `maintitle` |             | `string` | `abouttext.title` |
| `width`     | `width`     |             | `number` | `undefined`       |


## Dependencies

### Used by

 - [app-heropage](..\..\app-pages\app-heropage)

### Depends on

- [mnv-grid](..\..\layout\mnv-grid)
- [mnv-title](..\..\typography\mnv-title)
- [mnv-paragraph](..\..\typography\mnv-paragraph)

### Graph
```mermaid
graph TD;
  app-about --> mnv-grid
  app-about --> mnv-title
  app-about --> mnv-paragraph
  mnv-title --> mnv-overline
  app-heropage --> app-about
  style app-about fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
