import { Component, Prop, h } from '@stencil/core'
import { MatchResults } from '@stencil/router'

@Component({
	tag: 'app-heropage',
	styleUrl: 'app-heropage.scss',
	shadow: true,
})
export class AppHeropage {
	@Prop() match: MatchResults

	render() {
		return (
			<div class='app-heropage'>
				<div style={{ position: 'fixed', top: '20px', left: '20px' }}>
					<stencil-route-link url='/'>
						<mnv-button contained>Home</mnv-button>
					</stencil-route-link>
				</div>
				<mnv-hero title='UFRJ Sustentável' button='Ação'>
					descubra as tecnologias e projetos verdes desenvolvidos na maior
					universidade federal do Brasil
				</mnv-hero>
			</div>
		)
	}
}
