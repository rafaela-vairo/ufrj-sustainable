import { Component, h, Prop, Host } from '@stencil/core'

@Component({
	tag: 'mnv-projeto',
	styleUrl: 'mnv-projeto.scss',
})
export class AppAbout {
	@Prop() projTitle: string = 'Título'
	@Prop() projText: string = 'Texto'
	@Prop() projImg: string
	@Prop() projImgLegenda: string = 'Foto: Arthur Moaes'
	@Prop() projButton: string = 'Ver mais'

	render() {
		return (
			<Host>
				{this.projImg ? (
					<div
						class='project-img-main'
						style={{
							'--project-img': `url('${this.projImg}')`,
						}}
					/>
				) : (
					''
				)}
				<div class='text-block'>
					<mnv-title level='h4'>{this.projTitle}</mnv-title>
					<mnv-paragraph>{this.projText}</mnv-paragraph>
					<mnv-button contained>{this.projButton}</mnv-button>
				</div>
			</Host>
		)
	}
}
