import { Component, h } from '@stencil/core';

@Component({
    tag: 'mnv-pre',
    styleUrl: 'mnv-pre.scss',
    shadow: true,
})
export class MnvPre {
    render() {
        return (
            <pre>
                <slot/>
            </pre>
        );
    }
}
