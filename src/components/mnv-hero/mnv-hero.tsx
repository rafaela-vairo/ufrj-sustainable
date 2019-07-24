import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-hero',
	styleUrl: 'mnv-hero.scss',
	shadow: true,
})
export class Mnvhero {
	@Prop() background: string
	@Prop() herotitle: string
	@Prop() button: string

	render() {
		return (
			<div class='image'>
				<div class='body'>
					<mnv-grid container>
						<mnv-grid item sm={12} md={9} lg={6} xl={6}>
							<mnv-title level='hero'>{this.herotitle}</mnv-title>
						</mnv-grid>
						<mnv-grid item md={3} lg={6} xl={6} />
						<mnv-grid item sm={12} md={6} lg={4} xl={4}>
							<mnv-title level='h4'>
								<slot />
							</mnv-title>
						</mnv-grid>
						{this.button ? (
							<mnv-grid item sm={12} md={12} lg={12} xl={12}>
								<mnv-button
									outlined
									marginzero
									style={{ margin: '0px !important' }}
								>
									{this.button}
								</mnv-button>
							</mnv-grid>
						) : (
							''
						)}
					</mnv-grid>
				</div>
			</div>
		)
	}
}
