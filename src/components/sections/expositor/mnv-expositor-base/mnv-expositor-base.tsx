import { Component, h, Prop } from '@stencil/core'
import _ from 'lodash'

@Component({
	tag: 'mnv-expositor-base',
	styleUrl: 'mnv-expositor-base.scss',
	shadow: true,
})
export class MnvExpositorBase {
	@Prop() data

	async componentDidLoad() {
		this.data = _.filter(this.data, {
			acf_fc_layout: 'secao_vitrine',
		})
	}

	render() {
		return (
			<div class='root'>
				{this.data.map(projeto => (
					<mnv-expositor
						sectionTitle={projeto.secao_titulo}
						sectionSubtitle={projeto.secao_subtitulo}
						projects={projeto.vitrine_conteudo}
						spotlight={projeto.vitrine_destaque}
					/>
				))}
			</div>
		)
	}
}
