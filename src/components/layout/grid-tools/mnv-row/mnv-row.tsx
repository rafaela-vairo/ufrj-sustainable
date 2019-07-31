import { Component, h } from '@stencil/core';


@Component({
    tag: 'mnv-row',
    styleUrl: 'mnv-row.css',
    shadow: true,
})
export class MnvRow {

    render = () => <div><slot/></div> 
}
