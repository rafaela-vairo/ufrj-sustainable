import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mnv-menubuttonmobile',
	styleUrl: 'mnv-menubuttonmobile.scss',
	shadow: true,
})
export class MnvMenubuttonmobile {
	@Prop() open: boolean = false

	handleClick() {
		this.open = !this.open
	}
	render() {
		return (
			<div class='button' onClick={this.handleClick}>
				menu
			</div>
		)
	}
}
