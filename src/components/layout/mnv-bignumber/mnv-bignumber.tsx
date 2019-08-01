import { Component, h, Prop } from '@stencil/core'
import _ from 'lodash'

function random_rgba() {
	var o = Math.round,
		r = Math.random,
		s = 255
	return `rgba(${o(r() * s - 200)}, ${o(r() * s - 50)}, ${o(r() * s)}, 1)`
}

@Component({
	tag: 'mnv-bignumber',
	styleUrl: 'mnv-bignumber.scss',
	shadow: true,
})
export class MnvBignumber {
	@Prop() numbers: Array<any>
	render() {
		const numcolors = _.zip(
			this.numbers,
			_.times(this.numbers.length, random_rgba)
		)
		return (
			<mnv-grid container id='numcontainer'>
				{numcolors.map(value => (
					<mnv-grid item id='number'>
						<div
							class={
								value[0].acf.numero_valor.length < 4
									? `short-${value[0].acf.numero_valor.length}`
									: 'long'
							}
							id='box'
							style={{ '--background-color': value[1] }}
						>
							<div class='inner-number'>{value[0].acf.numero_valor}</div>
							<div class='inner-text'>{value[0].acf.numero_descricao}</div>
						</div>
					</mnv-grid>
				))}
			</mnv-grid>
		)
	}
}
