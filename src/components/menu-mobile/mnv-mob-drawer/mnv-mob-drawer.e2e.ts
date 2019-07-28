import { newE2EPage } from '@stencil/core/testing'

describe('mnv-mob-drawer', () => {
	it('renders', async () => {
		const page = await newE2EPage()

		await page.setContent('<mnv-mob-drawer></mnv-mob-drawer>')
		const element = await page.find('mnv-mob-drawer')
		expect(element).toHaveClass('hydrated')
	})
})
