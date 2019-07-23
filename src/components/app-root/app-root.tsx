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
						<stencil-route url='/' component='app-home' exact={true} />
						<stencil-route url='/hero/:name' component='app-hero' />
					</stencil-route-switch>
				</stencil-router>
			</Host>
		)
	}
}
