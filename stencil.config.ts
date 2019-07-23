import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
	namespace: 'mnv-ds',
	globalScript: 'src/global/scripts.ts',
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'docs-readme',
		},
		{
			type: 'www',
			serviceWorker: null, // disable service workers
		},
	],
	plugins: [
		sass({
			injectGlobalPaths: [
				'src/global/variables.scss',
				'src/global/mixins.scss',
				'src/global/fonts.scss',
			],
		}),
	],
}
