import { Component, Host, h } from '@stencil/core'

@Component({
	tag: 'app-bignumbers',
	styleUrl: 'app-bignumbers.scss',
	shadow: true,
})
export class AppBignumbers {
	render() {
		return (
			<Host>
				<div id='title'>
					<mnv-title level='h1'>UFRJ em números</mnv-title>
				</div>
				<mnv-bignumber />
			</Host>
		)
	}
}
