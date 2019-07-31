import { Component, h, Prop } from '@stencil/core'

const content = {
	title: 'Projetos',
	text: `A Universidade Federal do Rio de Janeiro(UFRJ) é a maior federal do Brasil e a primeira instituição
	 oficial de ensino superior do país, em atividade desde 1792 e organizada como estrutura universitária em 1920.
	 Com ótimas colocações em rankings acadêmicos nacionais e internacionais, a Universidade fará 100 anos em 2020.
	 Atualmente, é a quarta instituição que mais produz ciência no Brasil, desenvolvendo em todos os seus campi
	 pesquisas de ponta em diversas áreas de tecnologias sustentáveis: energia solar, novos combustíveis, agroecologia,
	 conservação ambiental, reciclagem, eficiência hídrica, entre outros.`,
}

@Component({
	tag: 'mnv-expositor',
	styleUrl: 'mnv-expositor.scss',
})
export class AppAbout {
	@Prop() maintitle: string = content.title
	@Prop() maintext: string = content.text

	render() {
		return (
			<div class='root'>
				<mnv-grid container>
					<mnv-grid item block>
						<div class='base'>
							<div class='text-block'>
								<mnv-title level='h1'>{this.maintitle}</mnv-title>
								<mnv-paragraph>{this.maintext}</mnv-paragraph>
								<mnv-button contained>botão</mnv-button>
							</div>
						</div>
					</mnv-grid>
				</mnv-grid>
			</div>
		)
	}
}
