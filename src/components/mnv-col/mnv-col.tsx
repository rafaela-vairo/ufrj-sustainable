import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-col',
    styleUrl: 'mnv-col.css',
    shadow: true,
})
export class MnvCol {

    @Prop({ reflect: true }) class: string;

    render = () => <div class={this.class}><slot/></div>

}
