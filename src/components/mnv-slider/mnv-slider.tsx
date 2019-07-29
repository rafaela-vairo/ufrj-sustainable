import { Component, h, Prop, Element } from '@stencil/core'

@Component({
	tag: 'mnv-slider',
	styleUrl: 'mnv-slider.scss'
})
export class MnvSlider {
	@Prop() cards: any[] = [
		{
			overline: 'Overline 1',
			cardtitle: 'Título 1',
			subtitle: 'Subtitle 1',
			maintext:
				'A Universidade Federal do Rio de Janeiro (UFRJ) é a maior federal do Brasil e a primeira instituição oficial de ensino superior do país, em atividade desde 1792 e organizada como estrutura universitária em 1920.',
			button: 'Button'
		},
		{
			overline: 'Overline 2',
			cardtitle: 'Título 2',
			subtitle: 'Subtitle 2',
			maintext: 'Main text message lorem ipsum',
			button: 'Button'
		},
		{
			overline: 'Overline 3',
			cardtitle: 'Título 3',
			subtitle: 'Subtitle 3',
			maintext: 'Main text message lorem ipsum',
			button: 'Button'
		},
		{
			overline: 'Overline 4',
			cardtitle: 'Título 4',
			subtitle: 'Subtitle 4',
			maintext: 'Main text message lorem ipsum',
			button: 'Button'
		},
		{
			overline: 'Overline 5',
			cardtitle: 'Título 5',
			subtitle: 'Subtitle 5',
			maintext: 'Main text message lorem ipsum',
			button: 'Button'
		},
		{
			overline: 'Overline 6',
			cardtitle: 'Título 6',
			subtitle: 'Subtitle 6',
			maintext: 'Main text message lorem ipsum',
			button: 'Button'
		}
	]
	@Prop() images: string[]
	@Prop() currentIndex: number = 0
	@Prop() translateValue: number = 0
	@Prop() height: number
	@Prop() width: number
	@Element() slide: HTMLElement
	goToPrevSlide = () => {
		if (this.currentIndex === 0) return
		this.currentIndex = this.currentIndex - 1
		this.translateValue = this.translateValue + 570
	}

	goToNextSlide = () => {
		if (this.currentIndex === this.cards.length - 1) {
			return {
				currentIndex: 0,
				translateValue: 0
			}
		}
		this.currentIndex = this.currentIndex + 1
		this.translateValue = this.translateValue + -570
	}

	/* slideWidth = () => {
		return this.slide.clientWidth
	} */

	render() {
		let setHeight = this.height ? `${this.height}px` : null
		let setWidth = this.width ? `${this.width}px` : null
		return (
			<div class='slider-root'>
				<div class='arrow-root'>
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
					<div
						class='nextArrow arrow'
						style={{
							color: `${
								this.currentIndex === this.cards.length - 1
									? 'rgba(255,255,255, 0.3)'
									: 'white'
							}`,
							cursor: `${
								this.currentIndex === this.cards.length - 1
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
				</div>

				<div class='slider'>
					<div
						class='slider-wrapper'
						style={{
							height: setHeight,
							width: setWidth,
							transform: `translateX(${this.translateValue}px)`,
							transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)'
						}}
					>
						{this.cards.map(card => (
							<mnv-slide>
								<mnv-card
									overline={card.overline}
									cardtitle={card.cardtitle}
									subtitle={card.subtitle}
									button={card.button}
									width={540}
								>
									{card.maintext}
								</mnv-card>
							</mnv-slide>
						))}
					</div>
				</div>
			</div>
		)
	}
}
