import { Component, h, Prop } from '@stencil/core'
// import { getAsync } from '../../services/content';

@Component({
	tag: 'mnv-list-card',
    styleUrl: 'mnv-list-card.scss',
    shadow: true,
})
export class MnvListCard {
	@Prop() contents: any[]

	async componentDidLoad() {
		// this.contents = await getAsync();

		this.contents = [
			{ title: 'Titulo 1', subtitle: 'Subtitulo 1', text: 'Teste 1' },
			{ title: 'Titulo 2', subtitle: 'Subtitulo 2', text: 'Teste 2' },
			{ title: 'Titulo 3', subtitle: 'Subtitulo 3', text: 'Teste 3' },
			{ title: 'Titulo 4', subtitle: 'Subtitulo 4', text: 'Teste 4' },
			{ title: 'Titulo 5', subtitle: 'Subtitulo 5', text: 'Teste 5' },
			{ title: 'Titulo 6', subtitle: 'Subtitulo 6', text: 'Teste 6' },
		]
	}

	render() {
		return (
			<mnv-grid container>
				{this.contents.map((content, key) => (
					<mnv-grid item key={key} sm='12' md='6' lg='6' xl='4'>
						<mnv-card
							cardtitle={content.title}
							subtitle={content.subtitle}
              button='Veja Mais'
              class="card"
						>
							{content.text}
						</mnv-card>
					</mnv-grid>
				))}
			</mnv-grid>
		)
	}
}
