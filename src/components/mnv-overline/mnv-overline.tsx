import { Component, h } from '@stencil/core';


@Component({
    tag: 'mnv-overline',
    styleUrl: 'mnv-overline.scss',
    shadow: true,
})
export class MnvOverline {

    render = () => <span><slot/></span>;
        
}