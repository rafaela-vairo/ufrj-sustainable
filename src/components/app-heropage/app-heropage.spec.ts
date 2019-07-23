import { AppHeropage } from './app-heropage'

describe('app-Heropage', () => {
	it('builds', () => {
		expect(new AppHeropage()).toBeTruthy()
	})

	describe('normalization', () => {
		it('returns a blank string if the name is undefined', () => {
			const component = new AppHeropage()
			expect(component.normalize(undefined)).toEqual('')
		})

		it('returns a blank string if the name is null', () => {
			const component = new AppHeropage()
			expect(component.normalize(null)).toEqual('')
		})

		it('capitalizes the first letter', () => {
			const component = new AppHeropage()
			expect(component.normalize('quincy')).toEqual('Quincy')
		})

		it('lower-cases the following letters', () => {
			const component = new AppHeropage()
			expect(component.normalize('JOSEPH')).toEqual('Joseph')
		})

		it('handles single letter names', () => {
			const component = new AppHeropage()
			expect(component.normalize('q')).toEqual('Q')
		})
	})
})
