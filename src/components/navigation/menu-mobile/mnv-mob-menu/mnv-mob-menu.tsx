import { Component, Prop, Listen, h } from '@stencil/core'

@Component({
	tag: 'mnv-mob-menu',
	styleUrl: 'mnv-mob-menu.scss',
	shadow: true
})
export class MnvMobMenu {
	@Prop() open: boolean = false
	@Prop({ reflect: true }) setClass: string = 'menuroot'
	@Listen('scroll', { target: 'window' })
	handleScroll() {
		if (window.scrollY > window.innerHeight - 160) {
			this.setClass = 'menuroot slideUp'
		} else if (window.scrollY < window.innerHeight - 160) {
			this.setClass = 'menuroot slideDown'
		}
	}

	handleMenuClick() {
		this.open = !this.open
	}
	handleLinkClick() {
		this.open = false
	}

	render() {
		return (
			<header class={this.setClass}>
				<mnv-mob-button
					onClick={() => this.handleMenuClick()}
					open={this.open}
				/>
				<div class='logo'>
					<img
						class='link-brand'
						src='../../assets/icon/ufrj-100-anos-branco-horizontal.svg'
					/>
				</div>
				<mnv-mob-drawer open={this.open}>
					<a class='menuitem' onClick={() => this.handleLinkClick()}>
						A UFRJ
					</a>
					<a class='menuitem' onClick={() => this.handleLinkClick()}>
						Números
					</a>
					<a class='menuitem' onClick={() => this.handleLinkClick()}>
						Projetos
					</a>
					<a class='menuitem' onClick={() => this.handleLinkClick()}>
						Ensino
					</a>
				</mnv-mob-drawer>
			</header>
		)
	}
}
