import { Component, h, Prop } from '@stencil/core'

@Component({
	tag: 'mnv-footer',
	styleUrl: 'mnv-footer.scss'
})
export class MnvFooter {

	@Prop() locations: any[];

	componentDidLoad() {
		this.locations = [
			{name: "Campus Fundão", address: "Av. Pedro Calmon n°550 - Prédio da Reitoria.", floor: "2° andar - Cidade Universitária", cep: "Rio de Janeiro, RJ - CEP 21941-901",  phone: "+55 (21) 3938-9600", fax: "+55 (21) 3938-1605"},
			{name: "Campus Duque de Caxias", address: "Rod. Washigton Luiz, KM 104 - 5°", phone: "(21) 2679-1018"},
			{name: "Pólo Xerém UFRJ", address: "Estr. de Xerém, 27°", phone: "(21) 2679-2098"},
			{name: "Acesso à Graduação da UFRJ", address: "", phone: "3938-9430", email: "acessograduacao@ufrj.br"}
		]
	}

	render = () => (
		<footer>
			<mnv-grid container>
				<mnv-grid item sm='12' md='12' lg="6">
					<mnv-figure
						alt='Mapa da UFRJ'
						src='https://taiga.tic.ufrj.br/media/attachments/a/0/3/4/c444d3a27896dac18b8ffe71aefdb419212828b35b2e3c083f1afd0dc7a3/mapa_campi_ufrj2.svg.300x200_q85_crop.png'
					/>
				</mnv-grid>
				<mnv-grid item sm='12' md='12' lg="6">
					<mnv-grid container class="content">
						{
							this.locations.map(location =>
								<mnv-grid item sm="12" md="6" lg="6" xl="6">
									<div>
										<div>
											<mnv-title level='h5'>{location.name}</mnv-title>
											<mnv-paragraph>
												{location.address}
											</mnv-paragraph>
											{
												(location.floor) ? 
													<mnv-paragraph>{location.floor}</mnv-paragraph>
													: null
											}
											{
												(location.cep) ? 
												<mnv-paragraph>{location.cep}</mnv-paragraph>
												: null
											}
											{
												(location.phone) ? 
												<mnv-paragraph><i>Telefone</i>: {location.phone}</mnv-paragraph>
												: null
											}
											{
												(location.fax) ? 
												<mnv-paragraph><i>Fax</i>: {location.fax}</mnv-paragraph>
												: null
											}
											{
												(location.email) ? 
												<mnv-paragraph><i>Email</i>: {location.email}</mnv-paragraph>
												: null
											}
											<hr/>
										</div>
									</div>
								</mnv-grid>
							)
						}
					</mnv-grid>
				</mnv-grid>
			</mnv-grid>
		</footer>
	)
}
