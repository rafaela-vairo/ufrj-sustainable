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
	shadow: true,
})
export class MnvNavbar {
	@Prop({ reflect: true }) setClass: string = ' '
	@Listen('scroll', { target: 'window' })
	handleScroll() {
		if (window.scrollY > window.innerHeight - 860) {
			this.setClass = 'slideUp'
		} else if (window.scrollY < window.innerHeight - 860) {
			this.setClass = 'slideDown'
		}
	}

	render() {
		return (
			<header class={this.setClass} id='header'>
				<a href='#home'>
					<img
						class='link-brand'
						src='../../assets/icon/ufrj-100-anos-branco-horizontal.svg'
						alt='UFRJ 100 years logo'
					/>
				</a>
				<div class='links'>
					<a href='#about'>
						<mnv-navbutton class='link'>the ufrj</mnv-navbutton>
					</a>
					<a href='#numbers'>
						<mnv-navbutton class='link'>figures</mnv-navbutton>
					</a>
					<a href='#projects'>
						<mnv-navbutton class='link'>projects</mnv-navbutton>
					</a>
					<a href='#teaching'>
						<mnv-navbutton class='link'>teaching</mnv-navbutton>
					</a>
					<a href='#research'>
						<mnv-navbutton class='link'>research</mnv-navbutton>
					</a>
					<a href='#extension'>
						<mnv-navbutton class='link'>extension</mnv-navbutton>
					</a>
					<a href='#footer'>
						<mnv-navbutton class='link'>campuses</mnv-navbutton>
					</a>
				</div>
			</header>
		)
	}
}
