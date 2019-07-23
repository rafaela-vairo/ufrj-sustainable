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
				<stencil-route-link url='/'>
					<mnv-button contained>Home</mnv-button>
				</stencil-route-link>
				<mnv-paragraph>Olá, Minerva!</mnv-paragraph>
			</div>
		)
	}
}
