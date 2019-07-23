import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'mnv-hero',
    styleUrl: 'mnv-hero.scss',
    shadow: true,
})
export class MnvHero {

    @Prop() background: string;
    @Prop() name: string;
    @Prop() button: string;

    render() {
        return (
            <div>
                <mnv-grid container>
                    <mnv-grid item sm={12} md={12} lg={12} xl={12}>
                        <mnv-title level="h1">
                            {this.name}
                        </mnv-title>
                    </mnv-grid>
                    <mnv-grid item sm={12} md={12} lg={12} xl={12}>
                        <mnv-paragraph>
                            <slot/>
                        </mnv-paragraph>
                    </mnv-grid>
                    <mnv-grid item sm={12} md={12} lg={12} xl={12}>
                        <mnv-button outlined>
                            {this.button}
                        </mnv-button>
                    </mnv-grid>
                </mnv-grid>
            </div>
        );
    }
}
