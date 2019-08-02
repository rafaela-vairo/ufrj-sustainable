import { Component, h, Prop } from '@stencil/core'

/* const section = {
	title: 'Projetos',
	subtitle: 'Tecnologias sustentáveis',
	img:
		'https://media.gettyimages.com/photos/young-engineer-man-looking-and-checking-wind-turbines-at-field-picture-id811930458?s=2048x2048',
}

const projects = [
	{
		title: 'Energia Solar na Zona Industrial e Centro de Tecnologia',
		text: `A Universidade Federal do Rio de Janeiro(UFRJ) é a maior federal do Brasil e a primeira instituição
		oficial de ensino superior do país, em atividade desde 1792 e organizada como estrutura universitária em 1920.
		Com ótimas colocações em rankings acadêmicos nacionais e internacionais, a Universidade fará 100 anos em 2020.
		Atualmente, é a quarta instituição que mais produz ciência no Brasil, desenvolvendo em todos os seus campi
		pesquisas de ponta em diversas áreas de tecnologias sustentáveis: energia solar, novos combustíveis, agroecologia,
		conservação ambiental, reciclagem, eficiência hídrica, entre outros.`,
		img:
			'https://media.gettyimages.com/photos/wind-turbine-picture-id518613574?s=2048x2048',
	},
	{
		title: 'Concreto Biológico',
		text: `O projeto, desenvolvido pela Prefeitura da UFRJ, possibilitou a criação de um reservatório com capacidade
		de 450 mil m³ para armazenamento de água da chuva utilizada para a irrigação do Horto Universitário e das áreas
		verdes da Cidade Universitária. Além da sustentabilidade, a iniciativa permite uma economia de mais de 5 mil reais por ano.`,
		img:
			'https://media.gettyimages.com/photos/young-maintenance-engineer-team-working-in-wind-turbine-farm-at-picture-id831152982?s=2048x2048',
	},
	{
		title: 'Biogás',
		text: `Desenvolvido pelo Centro Experimental de Saneamento Ambiental (Cesa) em parceria com a Universidade de Boras, na Suécia, o projeto utiliza digestores anaeróbicos para produzir biogás a partir de lixo orgânico. Esse processo rende duas importantes matérias-primas: o próprio biogás, que pode ser utilizado para gerar energia elétrica limpa, e um composto orgânico rico em nutrientes ótimo para adubo. Os alunos e professores envolvidos criam a tecnologia e realizam o processo de produção dos compostos, que, mais tarde, serão utilizados na própria Universidade. `,
		img:
			'https://media.gettyimages.com/photos/large-factory-detail-at-night-picture-id522556128?s=2048x2048',
	},
] */

@Component({
	tag: 'mnv-expositor',
	styleUrl: 'mnv-expositor.scss',
})
export class MnvExpositor {
	@Prop() sectionTitle: string
	@Prop() sectionSubtitle: string
	@Prop() spotlight
	@Prop() projects

	render() {
		return (
			<div class='root'>
				<div
					class='header'
					style={{
						'--main-background': `url('${this.spotlight.projeto_imagem.url}')`,
					}}
				>
					<mnv-grid container>
						<mnv-grid item block xl='12' lg='12' md='12' sm='12'>
							<mnv-title level='h1'>{this.sectionTitle}</mnv-title>
							<mnv-title level='h3'>{this.sectionSubtitle}</mnv-title>
						</mnv-grid>
					</mnv-grid>
				</div>
				<mnv-grid container>
					<mnv-grid item block>
						<div class='base'>
							<mnv-projeto
								projTitle={this.spotlight.projeto_titulo}
								projText={this.spotlight.projeto_descricao}
								projImg=''
								projImgLegenda={this.spotlight.projeto_imagem.caption}
							/>
							{this.projects.map(project => (
								<mnv-projeto
									projTitle={project.projeto_titulo}
									projText={project.projeto_descricao}
									projImg={project.projeto_imagem.url}
									projImgLegenda={project.projeto_imagem.caption}
								/>
							))}
						</div>
					</mnv-grid>
				</mnv-grid>
			</div>
		)
	}
}
