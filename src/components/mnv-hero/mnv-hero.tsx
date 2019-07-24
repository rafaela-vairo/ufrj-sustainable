import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-hero',
	styleUrl: 'mnv-hero.scss',
	shadow: true,
})
export class Mnvhero {
	@Prop() background: string
	@Prop() title: string
	@Prop() button: string

	render() {
		return (
			<div class='image'>
				<div class='body'>
					<mnv-grid container>
						<mnv-grid item sm={12} md={12} lg={3} xl={12}>
							<mnv-title level='hero'>{this.title}</mnv-title>
						</mnv-grid>
						<mnv-grid item sm={12} md={12} lg={2} xl={4}>
							<mnv-title level='h4'>
								<slot />
							</mnv-title>
						</mnv-grid>
						<mnv-grid item sm={12} md={12} lg={12} xl={12}>
							<mnv-button outlined style={{ margin: '0px !important' }}>
								{this.button}
							</mnv-button>
						</mnv-grid>
					</mnv-grid>
				</div>
			</div>
		)
	}
}
