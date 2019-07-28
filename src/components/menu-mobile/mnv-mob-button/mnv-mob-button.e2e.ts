import { newE2EPage } from '@stencil/core/testing'

describe('mnv-mob-button', () => {
	it('renders', async () => {
		const page = await newE2EPage()

		await page.setContent('<mnv-mob-button></mnv-mob-button>')
		const element = await page.find('mnv-mob-button')
		expect(element).toHaveClass('hydrated')
	})
})
