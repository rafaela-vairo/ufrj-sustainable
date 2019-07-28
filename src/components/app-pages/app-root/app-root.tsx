import { Component, Host, h } from '@stencil/core'

@Component({
	tag: 'app-root',
	styleUrl: 'app-root.css',
	shadow: true,
})
export class AppRoot {
	render() {
		return (
			<Host>
				<stencil-router>
					<stencil-route-switch scrollTopOffset={0}>
						<stencil-route url='/' component='app-heropage' exact={true} />
						<stencil-route url='/althome/:name' component='app-home' />
					</stencil-route-switch>
				</stencil-router>
			</Host>
		)
	}
}
