import { Component, Prop, h } from '@stencil/core'
import { MatchResults } from '@stencil/router'
import Axios from 'axios'

const dataBase = Axios.create({
	baseURL: 'https://sust-dev.olimpo.tic.ufrj.br/wp-json/',
})

@Component({
	tag: 'app-heropage',
	styleUrl: 'app-heropage.scss',
})
export class AppHeropage {
	@Prop() match: MatchResults
	@Prop() data: any

	async componentDidLoad() {
		this.data = (await dataBase.get(
			'acf/v3/options/adm-secoes/?per_page=999'
		)).data.acf
		console.log(this.data)
	}

	render() {
		return (
			<div class='app-heropage'>
				<mnv-base />
				<mnv-navbar />
				<mnv-mob-menu />
				<mnv-hero
					id='home'
					herotitle={this.data.cabecalho.cabecalho_titulo}
					button='Saiba mais'
					bgimg='https://panorama.ufrj.br/wp-content/uploads/2019/05/DSC_0057-1215x810.jpg'
				>
					Descubra as tecnologias e projetos verdes desenvolvidos na maior
					universidade federal do Brasil
				</mnv-hero>
				<mnv-bg>
					<div>
						<mnv-about id='about' />
					</div>
					<div>
						<mnv-bignumbers id='numeros' />
					</div>
					<div>
						<mnv-expositor />
					</div>
					<div>
						<mnv-expositor sectionSubtitle='Iniciativas do CT' />
					</div>
					<div>
						<mnv-list-card />
					</div>
				</mnv-bg>
			</div>
		)
	}
}
