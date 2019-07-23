import { newE2EPage } from '@stencil/core/testing'

describe('app-hero', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<app-hero></app-hero>')

		const element = await page.find('app-hero')
		expect(element).toHaveClass('hydrated')
	})

	it('displays the specified name', async () => {
		const page = await newE2EPage({ url: '/hero/joseph' })

		const heroElement = await page.find('app-root >>> app-hero')
		const element = heroElement.shadowRoot.querySelector('div')
		expect(element.textContent).toContain('Hello! My name is Joseph.')
	})

	// it('includes a div with the class "app-hero"', async () => {
	//   const page = await newE2EPage({ url: '/hero/joseph' });

	// I would like to use a selector like this above, but it does not seem to work
	//   const element = await page.find('app-root >>> app-hero >>> div');
	//   expect(element).toHaveClass('app-hero');
	// });
})
