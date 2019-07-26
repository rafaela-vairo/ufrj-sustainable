import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mnv-drawermobile',
	styleUrl: 'mnv-drawermobile.scss',
	shadow: true,
})
export class MnvDrawermobile {
	@Prop() open: boolean = false
	render() {
		let openheight = this.open ? '100%' : '0'
		return (
			<div class='drawer' style={{ '--set-height': openheight }}>
				{this.open ? (
					<div class='menulist'>
						<slot />
					</div>
				) : null}
			</div>
		)
	}
}
