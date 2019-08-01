import { Component, h, Prop } from '@stencil/core'
import Api from '../../../global/scripts.js'

const getNumbers = async () => {
	try {
		return (await Api.get('/acf/v3/numero/?per_page=99')).data
	} catch (e) {
		console.log(e)
		return null
	}
}

@Component({
	tag: 'mnv-bignumbers',
	styleUrl: 'mnv-bignumbers.scss',
	shadow: true,
})
export class AppBignumbers {
	@Prop() setNumbers: any[]

	async componentDidLoad() {
		this.setNumbers = await getNumbers()
		console.log(this.setNumbers)
	}
	render() {
		return (
			<div>
				{/* <div id='title'>
					<mnv-title level='h1'>UFRJ em números</mnv-title>
				</div>
				<mnv-bignumber /> */}
				<mnv-grid container>
					<mnv-grid item xl='2' lg='2' />
					<mnv-grid item xl='8' lg='8' md='12' sm='12'>
						<mnv-title level='h1'>UFRJ em números</mnv-title>
					</mnv-grid>
					<mnv-grid item xl='2' lg='2' />
					<mnv-grid item xl='2' lg='2' />
					<mnv-grid item xl='8' lg='8' md='12' sm='12'>
						<mnv-bignumber numbers={this.setNumbers} />
					</mnv-grid>
					<mnv-grid item xl='2' lg='2' />
				</mnv-grid>
			</div>
		)
	}
}
