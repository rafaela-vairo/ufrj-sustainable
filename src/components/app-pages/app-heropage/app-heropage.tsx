import { Component, Prop, h } from '@stencil/core'
import { MatchResults } from '@stencil/router'

@Component({
	tag: 'app-heropage',
	styleUrl: 'app-heropage.scss',
})
export class AppHeropage {
	@Prop() match: MatchResults

	render() {
		return (
			<div class='app-heropage'>
				<mnv-base />
				<mnv-navbar />
				<mnv-mob-menu />
				<mnv-hero
					id='home'
					herotitle='UFRJ Sustentável'
					button='Saiba mais'
					bgimg='https://panorama.ufrj.br/wp-content/uploads/2019/05/DSC_0057-1215x810.jpg'
				>
					Descubra as tecnologias e projetos verdes desenvolvidos na maior
					universidade federal do Brasil
				</mnv-hero>
				<mnv-bg>
					<app-about id='about' />
					<app-bignumbers id='numeros' />
				</mnv-bg>
			</div>
		)
	}
}
