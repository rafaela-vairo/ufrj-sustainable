import { Component, h, State } from '@stencil/core';
import { getAsync } from '../../services/content';

@Component({
    tag: 'mnv-list-card',
    styleUrl: 'mnv-list-card.scss',
    shadow: true,
})
export class MnvListCard {

    @State() contents: Array<Object>;

    async componentDidLoad() {
        this.contents = await getAsync();
    }
    
    render() {
        return (
            <mnv-grid container>
                {
                    this.contents.map((content, key) => 
                        <mnv-grid key={key} item sm="12" md="6" lg="4" xl="4">
                            <mnv-card>
                                {content}
                            </mnv-card>
                        </mnv-grid>
                    )
                }
            </mnv-grid>
        );
    }
}
