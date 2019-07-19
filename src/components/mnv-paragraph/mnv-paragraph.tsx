import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'mnv-paragraph',
  styleUrl: 'mnv-paragraph.scss',
  shadow: true,
})
export class MnvParagraph {
  /**
   * Altera o parágrafo para tamanho reduzido (body 2).
   */
  @Prop() bodytwo: boolean

  /**
   * Ativa ou desativa estilização de capitular.
   */
  @Prop() capitular: boolean

  render() {
    let bodyclass = this.bodytwo ? 'bodytwo' : 'bodyone'
    let hascap = this.capitular ? 'capitular' : ''
    let setclass = bodyclass + ' ' + hascap
    return (
      <p class={setclass}>
        <slot />
      </p>
    )
  }
}
