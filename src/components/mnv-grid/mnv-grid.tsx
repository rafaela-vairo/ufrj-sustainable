import { Component, h } from '@stencil/core';


@Component({
    tag: 'mnv-grid',
    styleUrl: 'mnv-grid.css',
    shadow: true,
})
export class MnvGrid {

    render = () => <div><slot/></div>
}
