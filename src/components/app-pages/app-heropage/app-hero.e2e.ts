import { newE2EPage } from '@stencil/core/testing'

describe('app-Heropage', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<app-Heropage></app-Heropage>')

		const element = await page.find('app-Heropage')
		expect(element).toHaveClass('hydrated')
	})
})
