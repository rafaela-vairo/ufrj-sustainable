import { Component, h, Listen, Prop } from '@stencil/core'

/* let latestKnownScrollY = 0,
	ticking = false,
	genClass = 'slideDown'

function onScroll() {
	latestKnownScrollY = window.scrollY
	requestTick()
	console.log(genClass)
}

function requestTick() {
	if (!ticking) {
		requestAnimationFrame(update)
	}
	ticking = true
}

function update() {
	ticking = false
	if (latestKnownScrollY > 80) {
		genClass = 'slideUp'
	} else if (latestKnownScrollY < 80) {
		genClass = 'slideDown'
	}
}

window.addEventListener('scroll', onScroll, false) */

@Component({
	tag: 'mnv-navbar',
	styleUrl: 'mnv-navbar.scss',
})
export class MnvNavbar {
	@Prop({ reflect: true }) setClass: string = ' '
	@Listen('scroll', { target: 'window' })
	handleScroll() {
		if (window.scrollY > window.innerHeight) {
			this.setClass = 'slideUp'
		} else if (window.scrollY < window.innerHeight) {
			this.setClass = 'slideDown'
		}
	}

	render() {
		return (
			<header class={this.setClass} id='header'>
				<stencil-route-link url='/'>
					<mnv-navbutton class='link-brand'>Home</mnv-navbutton>
				</stencil-route-link>
				<div class='links'>
					<stencil-route-link url='/Heropage/stencil'>
						<mnv-navbutton class='link'>Heropage</mnv-navbutton>
					</stencil-route-link>
					<stencil-route-link url='/Heropage/stencil'>
						<mnv-navbutton class='link'>Heropage</mnv-navbutton>
					</stencil-route-link>
				</div>
			</header>
		)
	}
}
