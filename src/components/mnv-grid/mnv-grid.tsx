import { Component, Prop, Host, h } from '@stencil/core'

@Component({
	tag: 'mnv-grid',
	styleUrl: 'mnv-grid.scss',
})
export class MnvGrid {
	@Prop({ reflect: true }) spacing: number
	@Prop({ reflect: true }) container: boolean
	@Prop({ reflect: true }) item: boolean
	@Prop({ reflect: true }) xl: number
	@Prop({ reflect: true }) lg: number
	@Prop({ reflect: true }) md: number
	@Prop({ reflect: true }) sm: number
	render() {
		let spacing = this.spacing ? `grid-spacing-${this.spacing} ` : ''
		let xl = this.xl ? `grid-xl-${this.xl} ` : ''
		let lg = this.lg ? `grid-lg-${this.lg} ` : ''
		let md = this.md ? `grid-md-${this.md} ` : ''
		let sm = this.sm ? `grid-sm-${this.sm} ` : ''
		let container = this.container && !this.item ? 'grid-container ' : ''
		let item = this.item && !this.container ? 'grid-item ' : ''
		let genClass = xl + lg + md + sm + container + item + spacing
		return (
			<Host class={genClass}>
				<slot />
			</Host>
		)
	}
}
