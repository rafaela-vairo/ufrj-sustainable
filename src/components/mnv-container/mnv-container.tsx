import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-container',
    styleUrl: 'mnv-container.css',
    shadow: true,
})
export class MnvContainer {

    @Prop({ reflect: true }) xs: number;
    @Prop({ reflect: true }) sm: number;
    @Prop({ reflect: true }) md: number;
    @Prop({ reflect: true }) lg: number;
    @Prop({ reflect: true }) xl: number;

    render = () => <div><slot/></div>
}
