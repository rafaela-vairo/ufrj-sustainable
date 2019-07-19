import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-row',
    styleUrl: 'mnv-row.css',
    shadow: true,
})
export class MnvRow {

    @Prop({ reflect: true }) xs: number;
    @Prop({ reflect: true }) sm: number;
    @Prop({ reflect: true }) md: number;
    @Prop({ reflect: true }) lg: number;
    @Prop({ reflect: true }) xl: number;

    render = () => <div><slot/></div> 
}
