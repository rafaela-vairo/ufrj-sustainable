import { newE2EPage } from '@stencil/core/testing'

describe('app-Heropage', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<app-Heropage></app-Heropage>')

		const element = await page.find('app-Heropage')
		expect(element).toHaveClass('hydrated')
	})

	it('displays the specified name', async () => {
		const page = await newE2EPage({ url: '/Heropage/joseph' })

		const HeropageElement = await page.find('app-root >>> app-Heropage')
		const element = HeropageElement.shadowRoot.querySelector('div')
		expect(element.textContent).toContain('Hello! My name is Joseph.')
	})

	// it('includes a div with the class "app-Heropage"', async () => {
	//   const page = await newE2EPage({ url: '/Heropage/joseph' });

	// I would like to use a selector like this above, but it does not seem to work
	//   const element = await page.find('app-root >>> app-Heropage >>> div');
	//   expect(element).toHaveClass('app-Heropage');
	// });
})
