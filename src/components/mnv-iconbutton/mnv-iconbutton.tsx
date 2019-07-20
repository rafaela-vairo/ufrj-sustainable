import { Component, h } from '@stencil/core';

@Component({
    tag: 'mnv-iconbutton',
    styleUrl: 'mnv-iconbutton.scss',
    shadow: true,
})
export class MnvIconbutton {
    render() {
        return (
            <button>
                <slot/>
            </button>
        );
    }
}
