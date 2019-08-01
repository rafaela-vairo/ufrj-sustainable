import { Component, h, Prop, Host } from '@stencil/core';
import Api from '../../../services/api';
import _ from 'lodash';

@Component({
	tag: 'mnv-list-card',
	styleUrl: 'mnv-list-card.scss',
	shadow: true,
})
export class MnvListCard {
	@Prop() cards: any[];
	@Prop() title: string = 'Ensino';

	async componentDidLoad() {
		try {
			this.cards = (await Api.get('acf/v3/options/adm-secoes/?per_page=999')).data.acf.secoes;
			this.cards =  _.filter(this.cards, { 'acf_fc_layout': 'secao_cartoes', 'secao_titulo': this.title });
			if (this.cards.length > 1) {
				console.log('Seção possui títulos duplicados');
				this.cards = [];
				return;
			}
			this.cards = this.cards[0].cartao_conteudo;
		} catch (e) {
			this.cards = [];
			console.log(e);
		}
	}

	render() {
		return (
			<Host>
				<mnv-grid container>
					<mnv-grid item class='card-title' xl='8' lg='12' md='12' sm='12'>
						<mnv-title level='h1'>Ensino</mnv-title>
					</mnv-grid>
					{this.cards.map(card =>
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
