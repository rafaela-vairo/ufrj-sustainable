import { newE2EPage } from '@stencil/core/testing'

describe('mnv-mob-menu', () => {
	it('renders', async () => {
		const page = await newE2EPage()

		await page.setContent('<mnv-mob-menu></mnv-mob-menu>')
		const element = await page.find('mnv-mob-menu')
		expect(element).toHaveClass('hydrated')
	})
})
