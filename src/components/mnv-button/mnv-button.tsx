import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mnv-button',
	styleUrl: 'mnv-button.scss',
	shadow: true,
})
export class MnvButton {
	@Prop({ reflect: true }) disabled: boolean = false
	@Prop({ reflect: true }) type: string = 'button'
	@Prop() contained: boolean = false
	@Prop() outlined: boolean = false
	render() {
		let setclass = 'text'
		if (this.contained && !this.outlined) {
			setclass = 'contained'
		}
		if (this.outlined && !this.contained) {
			setclass = 'outlined'
		}
		return (
			<button class={setclass} type={this.type} disabled={this.disabled}>
				<slot />
			</button>
		)
	}
}
