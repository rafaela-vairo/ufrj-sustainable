import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'mnv-iconbutton',
    styleUrl: 'mnv-iconbutton.scss',
    shadow: true,
})
export class MnvIconbutton {
    @Prop({ reflect: true }) disabled: boolean = false
    @Prop({ reflect: true }) type: string = 'button'
    render() {
        return (
            <button type={this.type} disabled={this.disabled}>
                <slot/>
            </button>
        );
    }
}
