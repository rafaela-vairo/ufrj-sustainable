import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-expositor-base',
	styleUrl: 'mnv-expositor-base.scss',
})
export class AppAbout {
	@Prop() sectionTitle: string
	@Prop() sectionSubtitle: string
	@Prop() sectionImg: string
	@Prop() projects: any[]

	render() {
		return (
			<div class='root'>
				<div
					class='header'
					style={{
						'--main-background': `url('${this.projects[0].img}')`,
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
								projTitle={this.projects[0].title}
								projText={this.projects[0].text}
								projImg=''
							/>
							{this.projects.slice(1).map(project => (
								<mnv-projeto
									projTitle={project.title}
									projText={project.text}
									projImg={project.img}
								/>
							))}
						</div>
					</mnv-grid>
				</mnv-grid>
			</div>
		)
	}
}
