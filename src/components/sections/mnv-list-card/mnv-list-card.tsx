import { Component, h, Prop, Host } from '@stencil/core';
import _ from 'lodash';

@Component({
	tag: 'mnv-list-card',
	styleUrl: 'mnv-list-card.scss',
	shadow: true,
})
export class MnvListCard {
	@Prop() data: any[];
	@Prop() title: string = 'Ensino';

	async componentDidLoad() {
		this.data = _.filter(this.data, { 'acf_fc_layout': 'secao_cartoes', 'secao_titulo': this.title });
		if (this.data.length > 1) {
			console.log('Seção possui títulos duplicados');
			this.data = [];
			return;
		}
		this.data = this.data[0].cartao_conteudo;
	}

	render() {
		return (
			<Host>
				<mnv-grid container>
					<mnv-grid item class='card-title' xl='8' lg='12' md='12' sm='12'>
						<mnv-title level='h1'>{this.title}</mnv-title>
					</mnv-grid>
					{this.data.map(card =>
						<mnv-grid
							item
							class='card-root'
							key={card.ID}
							sm='12'
							md='6'
							lg='6'
							xl='6'
						>
							<mnv-card
								cardtitle={card.post_title}
								subtitle={card.post_type}
								button='Veja Mais'
								link={card.guid}
								class='card'
							>
								{card.post_content}
							</mnv-card>
						</mnv-grid>
					)}
				</mnv-grid>
			</Host>
		)
	}
}
