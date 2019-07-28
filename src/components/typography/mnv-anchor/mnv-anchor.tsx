import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mnv-anchor',
	styleUrl: 'mnv-anchor.scss',
	shadow: true
})
export class MnvAnchor {
	@Prop() href: string
	render() {
		return (
			<a href={this.href}>
				<slot />
			</a>
		)
	}
}
