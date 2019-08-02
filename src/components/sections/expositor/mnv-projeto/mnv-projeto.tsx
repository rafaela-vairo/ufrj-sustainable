import { Component, h, Prop, Host } from '@stencil/core'

@Component({
	tag: 'mnv-projeto',
	styleUrl: 'mnv-projeto.scss',
})
export class MnvProjeto {
	@Prop() projTitle: string = 'Title'
	@Prop() projText: string = 'Text'
	@Prop() projImg: string
	@Prop() projImgLegenda: string = 'Image: Arthur Moaes'
	@Prop() projButton: string = 'More info'

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
				<div class='legenda'>
					<div>{this.projImgLegenda}</div>
				</div>
				<div class='text-block'>
					<div class='legenda-mobile'>{this.projImgLegenda}</div>
					<mnv-title level='h4'>{this.projTitle}</mnv-title>
					<mnv-paragraph>{this.projText}</mnv-paragraph>
					<mnv-button contained>{this.projButton}</mnv-button>
				</div>
			</Host>
		)
	}
}
