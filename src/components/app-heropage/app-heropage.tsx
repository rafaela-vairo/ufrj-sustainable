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
				<mnv-hero
					name="Lorem ipsum dolor sit amet, consectur cras amet."
					button="Veja Mais"
					background="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				>
					Texto
				</mnv-hero>
			</div>
		)
	}
}
