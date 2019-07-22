import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mnv-tooltip',
    styleUrl: 'mnv-tooltip.scss',
    shadow: true,
})
export class MnvTooltip {
    @Prop() label: string;
    @Prop() length: string;
    render() {
        return (
            <span
            aria-label={this.label}
            data-balloon-length={this.length}>
                <slot/>
            </span>
        );
    }
}
