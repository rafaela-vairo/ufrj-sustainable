import { Component, h, Prop, Host } from '@stencil/core'
import Api from '../../../services/api';

@Component({
	tag: 'mnv-list-card',
	styleUrl: 'mnv-list-card.scss',
	shadow: true,
})
export class MnvListCard {
	@Prop() cards: any[]

	async componentDidLoad() {
		try {
			this.cards = (await Api.get('acf/v3/cartao/?per_page=999')).data;
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
							key={card.id}
							sm='12'
							md='6'
							lg='6'
							xl='6'
						>
							<mnv-card
								cardtitle={card.acf.cartao_subtitulo}
								subtitle={card.acf.cartao_categoria.name}
								button='Veja Mais'
								class='card'
							>
								{card.acf.cartao_descricao}
							</mnv-card>
						</mnv-grid>
					)}
				</mnv-grid>
			</Host>
		)
	}
}
