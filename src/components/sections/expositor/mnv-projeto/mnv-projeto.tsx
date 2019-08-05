import { Component, h, Prop, Host } from '@stencil/core'

@Component({
	tag: 'mnv-projeto',
	styleUrl: 'mnv-projeto.scss',
})
export class MnvProjeto {
	@Prop() projTitle: string = 'Title'
	@Prop() projText: string = 'Text'
	@Prop() projImg: string
	@Prop() projImgLegenda: string
	@Prop() projImgAlt: string
	@Prop() projButton: string = 'More info'
	@Prop() projButtonUrl: string

	render() {
		return (
			<Host>
				{this.projImg ? (
					<div
						class='project-img-main'
						style={{
							'--project-img': `url('${this.projImg}')`,
						}}
						aria-label={this.projImgAlt}
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
					<form action={this.projButtonUrl}>
						<mnv-button contained type='submit'>
							{this.projButton}
						</mnv-button>
					</form>
				</div>
			</Host>
		)
	}
}
