import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'mnv-figure-caption',
    styleUrl: 'mnv-figure-caption.scss',
    shadow: true,
})
export class MnvFigureCaption {

    @Prop({reflect: true}) src: string;
    @Prop({reflect: true}) alt: string;
    @Prop() caption: string;
    @Prop() bold: boolean;
    @Prop() italic: boolean;

    render() {
        return (
            <figure>
                <img src={this.src} alt={this.alt} />
                <figcaption class={{
                    'bold': this.bold,
                    'italic': this.italic,
                }}>
                    {this.caption}
                </figcaption>
            </figure>
        );
    }
}
