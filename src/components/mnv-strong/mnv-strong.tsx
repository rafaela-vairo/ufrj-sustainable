import { Component, h } from '@stencil/core'

@Component({
  tag: 'mnv-strong',
  styleUrl: 'mnv-strong.css',
  shadow: true,
})
export class MnvStrong {
  render() {
    return (
      <strong>
        <slot />
      </strong>
    )
  }
}
