import { TestWindow } from '@stencil/core/testing'
import { Mnvhero } from './mnv-hero'

describe('mnv-hero', () => {
	it('should build', () => {
		expect(new Mnvhero()).toBeTruthy()
	})

	describe('rendering', () => {
		let element: HTMLMnvheroElement
		let testWindow: TestWindow
		beforeEach(async () => {
			testWindow = new TestWindow()
			element = await testWindow.load({
				components: [Mnvhero],
				html: '<mnv-hero></mnv-hero>',
			})
		})

		// See https://stenciljs.com/docs/unit-testing
		{
			cursor
		}
	})
})
