import { Component, h } from '@stencil/core'
import _ from 'lodash'

let numbers = [
	{ number: '52.333', priority: '3', text: 'estudantes de graduação' },
	{ number: '15.346', priority: '3', text: 'estudantes de pós‑graduação' },
	{ number: '176', priority: '3', text: 'cursos de graduação' },
	{ number: '48', priority: '3', text: 'cursos noturnos' },
	{ number: '132', priority: '3', text: 'programas de pós‑graduação' },
	{ number: '3', priority: '2', text: 'graduações a distância' },
	{ number: '5', priority: '3', text: 'institutos de atenção à saúde' },
	{ number: '1.200', priority: '2', text: 'laboratórios' },
	{ number: '1.700', priority: '3', text: 'projetos de extensão' },
	{ number: '3', priority: '3', text: 'hospitais' },
	{ number: '13', priority: '3', text: 'museus' },
	{ number: '41', priority: '3', text: 'bibliotecas' },
	{ number: '665', priority: '3', text: 'estudantes estrangeiros' },
	{ number: '455', priority: '2', text: 'alunos em intercâmbio, via DRI' },
	{
		number: '16.182',
		priority: '3',
		text: 'docentes, técnicos e terceirizados',
	},
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
					<mnv-grid item id='number'>
						<div
							class={
								value[0].number.length < 4
									? `short-${value[0].number.length}`
									: 'long'
							}
							id='box'
							style={{ '--background-color': value[1] }}
						>
							<div class='inner-number'>{value[0].number}</div>
							<div class='inner-text'>{value[0].text}</div>
						</div>
					</mnv-grid>
				))}
			</mnv-grid>
		)
	}
}
