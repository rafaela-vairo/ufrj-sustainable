import { Component, h } from '@stencil/core'
import _ from 'lodash'

let numbers = [
	{ value: '1.000', priority: '' },
	{ value: '14.505', priority: '6' },
	{ value: '3', priority: '3' },
	{ value: '1.000.000', priority: '4' },
	{ value: '670.560', priority: '2' },
	{ value: '500', priority: '' },
	{ value: '3.863.000', priority: '3' },
	{ value: '1.000', priority: '' },
	{ value: '14.505', priority: '2' },
	{ value: '123', priority: '3' },
	{ value: '1.000.000', priority: '5' },
	{ value: '670.560', priority: '2' },
	{ value: '362', priority: '' },
]

function random_rgba() {
	var o = Math.round,
		r = Math.random,
		s = 255
	return `rgba(${o(r() * s - 200)}, ${o(r() * s - 50)}, ${o(r() * s)}, 1)`
}

const numcolors = _.zip(numbers, _.times(numbers.length, random_rgba))

@Component({
	tag: 'mnv-bignumber',
	styleUrl: 'mnv-bignumber.scss',
	shadow: true,
})
export class MnvBignumber {
	render() {
		return (
			<mnv-grid container id='numcontainer'>
				{numcolors.map(value => (
					<mnv-grid item id='number' xl={value[0].priority}>
						<div
							class={value[0].value.length < 2 ? 'short' : 'long'}
							id='box'
							style={{ '--background-color': value[1] }}
						>
							{value[0].value}
						</div>
					</mnv-grid>
				))}
			</mnv-grid>
		)
	}
}
