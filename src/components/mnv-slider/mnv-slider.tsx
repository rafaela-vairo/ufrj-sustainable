import { Component, h, Prop, Element } from '@stencil/core'

@Component({
	tag: 'mnv-slider',
	styleUrl: 'mnv-slider.scss'
})
export class MnvSlider {
	@Prop() cards: any[] = [
		{
			cardtitle: 'título um',
			subtitle: 'subtítulo um',
			button: 'botão'
		},
		{
			cardtitle: 'título dois',
			subtitle: 'subtítulo dois',
			button: 'botão'
		},
		{
			cardtitle: 'título três',
			subtitle: 'subtítulo três',
			button: 'botão'
		}
	]
	@Prop() images: string[] = [
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
		'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg'
	]
	@Prop() currentIndex: number = 0
	@Prop() translateValue: number = 0
	@Prop() height: number = 500
	@Prop() width: number = 500
	@Element() slide: HTMLElement
	goToPrevSlide = () => {
		if (this.currentIndex === 0) return
		this.currentIndex = this.currentIndex - 1
		this.translateValue = this.translateValue + this.slideWidth()
	}

	goToNextSlide = () => {
		if (this.currentIndex === this.images.length - 1) {
			return {
				currentIndex: 0,
				translateValue: 0
			}
		}
		this.currentIndex = this.currentIndex + 1
		this.translateValue = this.translateValue + -this.slideWidth()
	}

	slideWidth = () => {
		return this.slide.clientWidth
	}

	render() {
		return (
			<div
				class='slider'
				style={{
					width: `${this.width}px`,
					height: `${this.height}px`
				}}
			>
				<div
					class='slider-wrapper'
					style={{
						transform: `translateX(${this.translateValue}px)`,
						transition: 'transform ease-out 0.3s'
					}}
				>
					{this.images.map(image => (
						<mnv-slide image={image} />
					))}
				</div>
				<div
					class='nextArrow arrow'
					style={{
						color: `${
							this.currentIndex === this.images.length - 1
								? 'rgba(255,255,255, 0.3)'
								: 'white'
						}`,
						cursor: `${
							this.currentIndex === this.images.length - 1
								? 'default'
								: 'pointer'
						}`
					}}
					onClick={this.goToNextSlide}
				>
					<i class='material-icons' aria-hidden='true'>
						arrow_forward_ios
					</i>
				</div>
				<div
					class='backArrow arrow'
					style={{
						color: `${
							this.currentIndex === 0 ? 'rgba(255,255,255, 0.3)' : 'white'
						}`,
						cursor: `${this.currentIndex === 0 ? 'default' : 'pointer'}`
					}}
					onClick={this.goToPrevSlide}
				>
					<i class='material-icons' aria-hidden='true'>
						arrow_back_ios
					</i>
				</div>
			</div>
		)
	}
}
