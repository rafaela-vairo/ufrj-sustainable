import { Component, Prop, h } from '@stencil/core'

@Component({
	tag: 'mnv-slide',
	styleUrl: 'mnv-slide.css',
	shadow: true
})
export class MnvSlide {
	@Prop() image: string
	render() {
		const styles = {
			backgroundImage: `url(${this.image})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: '50% 60%'
		}
		return <div class='slide' style={styles} />
	}
}
