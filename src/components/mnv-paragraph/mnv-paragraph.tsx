import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mnv-paragraph',
    styleUrl: 'mnv-paragraph.scss',
    shadow: true,
})
export class MnvParagraph {
    /**
     * Altera o parágrafo para tamanho reduzido (body 2).
     */
    @Prop() bodytwo: boolean;

    render() {
        let bodyclass = this.bodytwo ? "bodytwo" : "bodyone"
        return (
            <p class={bodyclass}><slot/></p>
        );
    }
}
