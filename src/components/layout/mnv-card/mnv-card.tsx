import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-card',
	styleUrl: 'mnv-card.scss',
	shadow: true
})
export class MnvCard {
	@Prop({ reflect: true }) overline: string
	@Prop() cardtitle: string
	@Prop() subtitle: string
	@Prop() button: string

	render() {
		return (
			<div>
				<div class='header'>
					<mnv-title level='h5' overline={this.overline}>
						{this.cardtitle}
					</mnv-title>
					<mnv-subtitle type='one'>{this.subtitle}</mnv-subtitle>
					<mnv-divider />
				</div>
				<div class='body'>
					<mnv-paragraph>
						<slot />
					</mnv-paragraph>
				</div>
				<div class='action'>
					<mnv-button marginzero contained full>
						{this.button}
					</mnv-button>
				</div>
			</div>
		)
	}
}
