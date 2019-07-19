import { Component, h } from '@stencil/core';


@Component({
    tag: 'mnv-pre',
    styleUrl: 'mnv-pre.css',
    shadow: true,
})
export class MnvPre {

    render = () => <pre><slot/></pre>
}
