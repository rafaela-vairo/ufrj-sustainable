import { Component, h } from '@stencil/core'

@Component({
	tag: 'mnv-bg',
	styleUrl: 'mnv-bg.scss'
})
export class MnvBg {
	render() {
		return (
			<div class='alternating'>
				<slot />
			</div>
		)
	}
}
