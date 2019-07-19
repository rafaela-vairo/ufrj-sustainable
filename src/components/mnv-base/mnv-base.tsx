import { Component, h } from '@stencil/core'

var linkNode = document.createElement('link')
linkNode.type = 'text/css'
linkNode.rel = 'stylesheet'
linkNode.href =
	'//fonts.googleapis.com/css?family=Alegreya+Sans+SC|Alegreya+Sans:400,400i,700,700i|PT+Serif:400,400i,700,700i|Playfair+Display:400i,700|Proza+Libre:600&display=swap'
document.head.appendChild(linkNode)

@Component({
	tag: 'mnv-base',
	styleUrl: 'mnv-base.scss',
	shadow: true,
})
export class MnvBase {
	render() {
		return <slot />
	}
}
