import { Component, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-menumobile',
	styleUrl: 'mnv-menumobile.scss',
	shadow: true,
})
export class MnvMenumobile {
	@Prop() open: boolean = false
	@Prop() hover: boolean = false
	@Event() backgroundToggle: EventEmitter

	handleMenuClick(e) {
		this.open = !this.open
		this.backgroundToggle.emit(e)
	}

	handleLinkClick() {
		this.open = false
	}

	handleHover() {
		this.hover = !this.hover
	}

	render() {
		return (
			<div>
				<div class='container'>
					<mnv-menubuttonmobile
						open={this.open}
						onClick={() => this.handleMenuClick}
					/>
					<div class='logo'>logo</div>
					<mnv-drawermobile open={this.open}>Conteúdo do menu</mnv-drawermobile>
				</div>
			</div>
		)
	}
}
