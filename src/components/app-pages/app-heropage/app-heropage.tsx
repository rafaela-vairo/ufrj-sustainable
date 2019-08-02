import { Component, Prop, h } from '@stencil/core'
import { MatchResults } from '@stencil/router'
import Axios from 'axios'

const dataBase = Axios.create({
	baseURL: 'https://sust-dev.olimpo.tic.ufrj.br/wp-json/'
})

@Component({
	tag: 'app-heropage',
	styleUrl: 'app-heropage.scss'
})
export class AppHeropage {
	@Prop() match: MatchResults
	@Prop() data: any
	@Prop() numbers: any

	async componentWillLoad() {
		this.data = (await dataBase.get(
			'acf/v3/options/adm-secoes/?per_page=999'
		)).data.acf
		console.log(this.data)
		this.numbers = (await dataBase.get('/acf/v3/numero/?per_page=99')).data
		console.log(this.numbers)
	}

	render() {
		return (
			<div class='app-heropage'>
				<mnv-base />
				<mnv-navbar />
				<mnv-mob-menu />
				<mnv-hero
					id='home'
					herotitle={this.data['cabecalho']['cabecalho_titulo']}
					button='Saiba mais'
					bgimg={this.data['cabecalho']['cabecalho_imagem']['url']}
				>
					{this.data['cabecalho']['cabecalho_descricao']}
				</mnv-hero>
				<mnv-bg>
					<div>
						<mnv-about
							id='about'
							mainTitle={this.data['apresentacao']['apresentacao_titulo']}
							mainText={this.data['apresentacao']['apresentacao_texto']}
						/>
					</div>
					<div>
						<mnv-bignumbers id='numeros' setNumbers={this.numbers} />
					</div>
					<div>
						<mnv-expositor id='projetos' />
					</div>
					<div>
						<mnv-expositor sectionSubtitle='Iniciativas do CT' />
					</div>
					<div>
						<mnv-list-card name="Ensino" data={this.data.secoes} />
					</div>
					<div>
						<mnv-list-card name="Pesquisa" data={this.data.secoes} />
					</div>
					<div>
						<mnv-list-card name="Extensão" data={this.data.secoes} />
					</div>
				</mnv-bg>
			</div>
		)
	}
}
