import { Component, Prop, h } from '@stencil/core'
import { MatchResults } from '@stencil/router'

@Component({
	tag: 'app-hero',
	styleUrl: 'app-hero.scss',
	shadow: true,
})
export class AppHero {
	@Prop() match: MatchResults

	render() {
		return (
			<div class='app-hero'>
				<stencil-route-link url='/'>
					<mnv-button contained>Home</mnv-button>
				</stencil-route-link>
				<mnv-paragraph>Olá, Minerva!</mnv-paragraph>
			</div>
		)
	}
}
