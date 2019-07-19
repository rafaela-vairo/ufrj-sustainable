import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-figure-caption',
    styleUrl: 'mnv-figure-caption.css',
    shadow: true,
})
export class MnvFigureCaption {

    @Prop({reflect: true}) src: string;
    @Prop({reflect: true}) alt: string;
    @Prop() caption: string;

    render() {
        return (
            <figure>
                <img src={this.src} alt={this.alt} />
                <figcaption>{this.caption}</figcaption>
            </figure>
        );
    }
}
