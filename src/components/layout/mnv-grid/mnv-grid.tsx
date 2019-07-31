import { Component, Prop, Host, h } from '@stencil/core'

@Component({
	tag: 'mnv-grid',
	styleUrl: 'mnv-grid.scss',
})
export class MnvGrid {
	@Prop() spacing: number
	@Prop() container: boolean
	@Prop() item: boolean
	@Prop() xl: string
	@Prop() lg: string
	@Prop() md: string
	@Prop() sm: string
	@Prop() block: boolean
	@Prop() indented: boolean
	render() {
		let spacing = this.spacing ? `grid-spacing-${this.spacing} ` : ''
		let xl = this.xl ? `grid-xl-${this.xl} ` : ''
		let lg = this.lg ? `grid-lg-${this.lg} ` : ''
		let md = this.md ? `grid-md-${this.md} ` : ''
		let sm = this.sm ? `grid-sm-${this.sm} ` : ''
		let container = this.container && !this.item ? 'grid-container ' : ''
		let item = this.item && !this.container ? 'grid-item ' : ''
		let indented = this.indented ? `indented` : ''
		let block = this.block ? `block` : ''
		let genClass =
			xl + lg + md + sm + container + item + spacing + indented + block
		return (
			<Host class={genClass}>
				<slot />
			</Host>
		)
	}
}
