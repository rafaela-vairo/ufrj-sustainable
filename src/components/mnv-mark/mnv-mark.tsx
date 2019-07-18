import { Component, Prop, h } from '@stencil/core';


@Component({
    tag: 'mnv-mark',
    styleUrl: 'mnv-mark.css'
})
export class MnvMark {
    /**
     * Value: propriedade de teste
     */
    @Prop() value: string;

    render() {
        return (
            <strong>
                <slot />
            </strong>
        );
    }
}
