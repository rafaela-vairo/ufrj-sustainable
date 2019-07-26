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
				<mnv-grid item xl='12' md='12' indented>
					<mnv-title level='h1'>UFRJ em números</mnv-title>
				</mnv-grid>
				<mnv-grid item xl='12' md='12'>
					<mnv-bignumber />
				</mnv-grid>
			</Host>
		)
	}
}
