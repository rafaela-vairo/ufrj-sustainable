import { Component, h, Element, Prop } from '@stencil/core'

@Component({
	tag: 'app-about',
	styleUrl: 'app-about.scss'
})
export class AppAbout {
	@Element() about: HTMLElement
	@Prop() width: number
	@Prop() maintitle: string = 'Sobre a UFRJ'
	@Prop() maintext: string =
		'A Universidade Federal do Rio de Janeiro (UFRJ) é a maior federal do Brasil e a primeira instituição oficial de ensino superior do país, em atividade desde 1792 e organizada como estrutura universitária em 1920. Com ótimas colocações em rankings acadêmicos nacionais e internacionais, a Universidade fará 100 anos em 2020. Atualmente, é a quarta instituição que mais produz ciência no Brasil, desenvolvendo em todos os seus campi pesquisas de ponta em diversas áreas de tecnologias sustentáveis: energia solar, novos combustíveis, agroecologia, conservação ambiental, reciclagem, eficiência hídrica, entre outros.'

	componentDidLoad() {
		let getWidth = this.about.getBoundingClientRect().width
		//this.width = getWidth === 1920 ? getWidth - 615
		if (getWidth > 1751) {
			this.width = 1290
			console.log(this.width)
		}
		if (getWidth > 1400 && getWidth < 1750) {
			this.width = Math.round(getWidth - getWidth / 2)
			console.log(this.width)
		}
		console.log(`second ${this.width}`)
	}
	render() {
		return (
			<div class='about-root'>
				<mnv-grid container>
					<mnv-grid item xl='12' md='12' indented>
						<mnv-title level='h1'>{this.maintitle}</mnv-title>
					</mnv-grid>
					<mnv-grid item xl='12' md='12' indented>
						<mnv-paragraph capitular>{this.maintext}</mnv-paragraph>
					</mnv-grid>
					<mnv-grid item xl='12' md='12' indented>
						<mnv-slider />
					</mnv-grid>
				</mnv-grid>
			</div>
		)
	}
}
