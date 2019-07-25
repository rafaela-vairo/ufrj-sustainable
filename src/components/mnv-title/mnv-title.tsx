import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-title',
	styleUrl: 'mnv-title.scss',
})
export class MnvTitle {
	@Prop() level: string;
	@Prop() overline: string

	// Renderiza o componente
	render() {
		if (this.overline) {
			switch (this.level) {
				case 'h1':
					return (
						<div>
							<mnv-overline>{this.overline}</mnv-overline>
							<h1 class='overline'>
								<slot />
							</h1>
						</div>
					)
				case 'h2':
					return (
						<div>
							<mnv-overline>{this.overline}</mnv-overline>
							<h2 class='overline'>
								<slot />
							</h2>
						</div>
					)
				case 'h3':
					return (
						<div>
							<mnv-overline>{this.overline}</mnv-overline>
							<h3 class='overline'>
								<slot />
							</h3>
						</div>
					)
				case 'h4':
					return (
						<div>
							<mnv-overline>{this.overline}</mnv-overline>
							<h4 class='overline'>
								<slot />
							</h4>
						</div>
					)
				case 'h5':
					return (
						<div>
							<mnv-overline>{this.overline}</mnv-overline>
							<h5 class='overline'>
								<slot />
							</h5>
						</div>
					)
				case 'h6':
					return (
						<div>
							<mnv-overline>{this.overline}</mnv-overline>
							<h6 class='overline'>
								<slot />
							</h6>
						</div>
					)
			}
		} else {
			switch (this.level) {
				case 'h1':
					return (
						<h1>
							<slot />
						</h1>
					)
				case 'h1 sans':
					return (
						<h1 class='h1sans'>
							<slot />
						</h1>
					)
				case 'hero':
					return (
						<h1 class='hero'>
							<slot />
						</h1>
					)
				case 'h2':
					return (
						<h2>
							<slot />
						</h2>
					)
				case 'h3':
					return (
						<h3>
							<slot />
						</h3>
					)
				case 'h4':
					return (
						<h4>
							<slot />
						</h4>
					)
				case 'h5':
					return (
						<h5>
							<slot />
						</h5>
					)
				case 'h6':
					return (
						<h6>
							<slot />
						</h6>
					)
			}
		}
	}
}
