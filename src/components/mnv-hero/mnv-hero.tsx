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
					<mnv-grid container class="container">
						<mnv-grid item sm={12} md={3} lg={3} xl={3}>
							<mnv-title level='hero'>{this.title}</mnv-title>
						</mnv-grid>
						<mnv-grid item sm={12} md={9} lg={9} xl={9} />
						<mnv-grid item sm={12} md={4} lg={4} xl={4}>
							<mnv-title level='h4'>
								<slot />
							</mnv-title>
						</mnv-grid>
						<mnv-grid item sm={12} md={8} lg={8} xl={8} />
						<mnv-grid item sm={12} md={12} lg={12} xl={12}>
							<mnv-button
								outlined
								marginzero
								style={{ margin: '0px !important' }}
							>
								{this.button}
							</mnv-button>
						</mnv-grid>
					</mnv-grid>
				</div>
			</div>
		)
	}
}
