import { Component, h } from '@stencil/core'

@Component({
	tag: 'app-bignumbers',
	styleUrl: 'app-bignumbers.scss',
	shadow: true,
})
export class AppBignumbers {
	render() {
		return (
			<div>
				{/* <div id='title'>
					<mnv-title level='h1'>UFRJ em números</mnv-title>
				</div>
				<mnv-bignumber /> */}
				<mnv-grid container>
					<mnv-grid item xl='2' />
					<mnv-grid item xl='8'>
						<mnv-title level='h1'>UFRJ em números</mnv-title>
					</mnv-grid>
					<mnv-grid item xl='2' />
					<mnv-grid item xl='2' />
					<mnv-grid item xl='8'>
						<mnv-bignumber />
					</mnv-grid>
					<mnv-grid item xl='2' />
				</mnv-grid>
			</div>
		)
	}
}
