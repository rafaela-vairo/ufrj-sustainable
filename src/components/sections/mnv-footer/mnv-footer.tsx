import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-footer',
	styleUrl: 'mnv-footer.scss',
})
export class MnvFooter {
	@Prop() locations: any[]

	componentDidLoad() {
		this.locations = [
			{
				name: 'Campus Fundão',
				address: 'Av. Pedro Calmon n°550 - Prédio da Reitoria.',
				floor: '2° andar - Cidade Universitária',
				cep: 'Rio de Janeiro, RJ - CEP 21941-901',
				phone: '+55 (21) 3938-9600',
				fax: '+55 (21) 3938-1605',
			},
			{
				name: 'Campus Duque de Caxias',
				address: 'Rod. Washigton Luiz, KM 104 - 5°',
				phone: '(21) 2679-1018',
			},
			{
				name: 'Pólo Xerém UFRJ',
				address: 'Estr. de Xerém, 27°',
				phone: '(21) 2679-2098',
			},
			{
				name: 'Acesso à Graduação da UFRJ',
				address: '',
				phone: '3938-9430',
				email: 'acessograduacao@ufrj.br',
			},
		]
	}

	render = () => (
		<footer>
			<mnv-grid container>
				<mnv-grid item sm='12' md='12' lg='6' xl='6'>
					<img
						class='map'
						alt='Mapa da UFRJ'
						src='../../../assets/mapa_campi_ufrj2.svg'
					/>
				</mnv-grid>
				<mnv-grid item sm='12' md='12' lg='6' xl='6' class='address-root'>
					<mnv-grid container>
						{this.locations.map(location => (
							<mnv-grid item sm='12' md='6' lg='6' xl='6'>
								<div class='address'>
									<div>
										<mnv-title level='h5'>{location.name}</mnv-title>
										<mnv-paragraph>
											<div>{location.address}</div>
											{location.floor ? <div>{location.floor}</div> : null}
											{location.cep ? <div>{location.cep}</div> : null}
											{location.phone ? (
												<div>
													<i>Telefone</i>: {location.phone}
												</div>
											) : null}
											{location.fax ? (
												<div>
													<i>Fax</i>: {location.fax}
												</div>
											) : null}
											{location.email ? (
												<div>
													<i>Email</i>: {location.email}
												</div>
											) : null}
										</mnv-paragraph>
									</div>
									{/* <hr /> */}
								</div>
							</mnv-grid>
						))}
					</mnv-grid>
				</mnv-grid>
			</mnv-grid>
		</footer>
	)
}
