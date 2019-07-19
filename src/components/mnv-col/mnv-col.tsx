import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-col',
    styleUrl: 'mnv-col.css',
    shadow: true,
})
export class MnvCol {

    @Prop({ reflect: true }) xs: number;
    @Prop({ reflect: true }) sm: number;
    @Prop({ reflect: true }) md: number;
    @Prop({ reflect: true }) lg: number;
    @Prop({ reflect: true }) xl: number;

    render = () => <div><slot/></div>
}
