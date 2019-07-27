import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mnv-mob-drawer',
	styleUrl: 'mnv-mob-drawer.scss',
	shadow: true
})
export class MnvMobDrawer {
	@Prop() open: boolean = false

	render() {
		let openheight = this.open ? '100vh' : '0'
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
