import { Component, Host, h } from '@stencil/core'

@Component({
	tag: 'app-about',
	styleUrl: 'app-about.scss',
})
export class AppAbout {
	render() {
		return (
			<Host>
				<mnv-grid item xl='12' md='12' indented>
					<mnv-title level='h1'>Sobre a UFRJ</mnv-title>
				</mnv-grid>
				<mnv-grid item xl='12' md='12' indented>
					<mnv-paragraph capitular>
						A Universidade Federal do Rio de Janeiro (UFRJ) é a maior federal do
						Brasil e a primeira instituição oficial de ensino superior do país,
						em atividade desde 1792 e organizada como estrutura universitária em
						1920. Com ótimas colocações em rankings acadêmicos nacionais e
						internacionais, a Universidade fará 100 anos em 2020. Atualmente, é
						a quarta instituição que mais produz ciência no Brasil,
						desenvolvendo em todos os seus campi pesquisas de ponta em diversas
						áreas de tecnologias sustentáveis: energia solar, novos
						combustíveis, agroecologia, conservação ambiental, reciclagem,
						eficiência hídrica, entre outros.
					</mnv-paragraph>
				</mnv-grid>
			</Host>
		)
	}
}
