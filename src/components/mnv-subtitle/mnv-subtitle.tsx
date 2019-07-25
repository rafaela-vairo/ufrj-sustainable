import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-subtitle',
    styleUrl: 'mnv-subtitle.scss',
})
export class MnvSubtitle {

    @Prop() type: string;

    render() {
        switch (this.type) {
            case 'one': return <span class="one"><slot/></span>;
            case 'two': return <span class="two"><slot/></span>;
        }
    }
}
