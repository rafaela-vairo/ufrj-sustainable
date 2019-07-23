import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-figure',
	styleUrl: 'mnv-figure.css',
	shadow: true,
})
export class MnvFigure {
	@Prop({ reflect: true }) src: string
	@Prop({ reflect: true }) alt: string

	// Renderiza o componente
	render() {
		return (
			<figure>
				<img src={this.src} alt={this.alt} />
			</figure>
		)
	}
}
