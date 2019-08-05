import { Component, h, Prop } from '@stencil/core'

export interface locations {
	name?: string
	address?: string
	floor?: string
	cep?: string
	phone?: string
	fax?: string
	email?: string
}

@Component({
	tag: 'mnv-footer',
	styleUrl: 'mnv-footer.scss',
})
export class MnvFooter {
	@Prop() locations: Array<locations>

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
		]
	}

	render = () => (
		<footer>
			<mnv-grid container>
				<mnv-grid item sm='12' md='8' lg='8' xl='8'>
					<img
						class='map'
						alt='Mapa da UFRJ'
						src='../../../assets/mapa_campi_ufrj_refined_2.svg'
					/>
				</mnv-grid>
				<mnv-grid item sm='12' md='4' lg='4' xl='4' class='address-root'>
					<div class='address'>
						<mnv-title level='h5'>Downtown campuses</mnv-title>
						<mnv-paragraph>
							<ol>
								<li>University City</li>
								<li>Praia Vermelha campus</li>
								<li>Centro campus</li>
								<li>Duque de Caxias campus</li>
								<li>Macaé campus</li>
							</ol>
						</mnv-paragraph>
					</div>
					<div class='social'>
						<a href='https://www.instagram.com/ufrj.oficial/'>
							<img
								alt='Instagram'
								src='../../../assets/instagram-brands.svg'
							/>
						</a>
						<a href='https://www.facebook.com/PortalUFRJ/'>
							<img
								alt='Facebook'
								src='../../../assets/facebook-brands.svg'
							/>
						</a>
						<a href='https://twitter.com/ufrj?lang=en'>
							<img
								alt='Twitter'
								src='../../../assets/twitter-brands.svg'
							/>
						</a>
						<a href='https://www.youtube.com/user/WebTVUFRJ'>
							<img
								alt='Youtube'
								src='../../../assets/youtube-brands.svg'
							/>
						</a>
					</div>
				</mnv-grid>
			</mnv-grid>
		</footer>
	)
}
