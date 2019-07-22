import { Component, h } from '@stencil/core';


@Component({
    tag: 'mnv-overline',
    styleUrl: 'mnv-overline.scss',
    shadow: false,
})
export class MnvOverline {

    render = () => <span><slot /></span>
}
