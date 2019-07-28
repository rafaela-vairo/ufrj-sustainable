import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mnv-mob-menu',
	styleUrl: 'mnv-mob-menu.scss',
	shadow: true
})
export class MnvMobMenu {
	@Prop() open: boolean = false

	handleMenuClick() {
		this.open = !this.open
	}
	handleLinkClick() {
		this.open = false
	}

	render() {
		return (
			<div class='menuroot'>
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
			</div>
		)
	}
}
