import { AppHero } from './app-hero'

describe('app-hero', () => {
	it('builds', () => {
		expect(new AppHero()).toBeTruthy()
	})

	describe('normalization', () => {
		it('returns a blank string if the name is undefined', () => {
			const component = new AppHero()
			expect(component.normalize(undefined)).toEqual('')
		})

		it('returns a blank string if the name is null', () => {
			const component = new AppHero()
			expect(component.normalize(null)).toEqual('')
		})

		it('capitalizes the first letter', () => {
			const component = new AppHero()
			expect(component.normalize('quincy')).toEqual('Quincy')
		})

		it('lower-cases the following letters', () => {
			const component = new AppHero()
			expect(component.normalize('JOSEPH')).toEqual('Joseph')
		})

		it('handles single letter names', () => {
			const component = new AppHero()
			expect(component.normalize('q')).toEqual('Q')
		})
	})
})
