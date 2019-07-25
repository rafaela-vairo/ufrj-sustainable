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
		if (window.scrollY > (window.innerHeight - 160) ) {
			this.setClass = 'slideUp'
		} else if (window.scrollY < (window.innerHeight - 160)) {
			this.setClass = 'slideDown'
		}
	}

	render() {
		return (
			<header class={this.setClass} id='header'>
				<stencil-route-link url='/'>
					<img class="link-brand" src="../../assets/icon/ufrj-100-anos-branco-horizontal.svg"/>
				</stencil-route-link>
				<div class='links'>
					<stencil-route-link url='/althome/stencil'>
						<mnv-navbutton class='link'>a ufrj</mnv-navbutton>
					</stencil-route-link>
					<stencil-route-link url='/'>
						<mnv-navbutton class='link'>números</mnv-navbutton>
					</stencil-route-link>
					<mnv-navbutton class='link'>projetos</mnv-navbutton>
					<mnv-navbutton class='link'>ensino</mnv-navbutton>
					<mnv-navbutton class='link'>pesquisa</mnv-navbutton>
					<mnv-navbutton class='link'>extensão</mnv-navbutton>
					<mnv-navbutton class='link'>contato</mnv-navbutton>
				</div>
			</header>
		)
	}
}
