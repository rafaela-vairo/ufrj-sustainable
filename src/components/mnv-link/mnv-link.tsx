import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-link',
    styleUrl: 'mnv-link.scss',
    shadow: true,
})
export class MnvLink {

    @Prop({reflect: true}) href: string;

    // Renderiza o componente
    render = () => <a href={this.href}><slot/></a>
}
