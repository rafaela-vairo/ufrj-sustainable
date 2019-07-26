import { Component, h } from '@stencil/core';


@Component({
    tag: 'mnv-footer',
    styleUrl: 'mnv-footer.scss'
})
export class MnvFooter {

    render = () => (
        <footer>
            <mnv-grid container>
                <mnv-grid item sm="12" md="4">
                    <mnv-figure 
                        alt="Mapa da UFRJ"
                        src="https://taiga.tic.ufrj.br/media/attachments/7/d/8/e/500f0b768c01773b1ceddab8d3143526bf8a1c44afca7ff78dc1b799126c/mapa_campi_ufrj2.svg.300x200_q85_crop.png"
                    />
                </mnv-grid>
                <mnv-grid item sm="12" md="4">
                    <div>
                        <div>
                            <mnv-title level="h5">Campus Fundão</mnv-title>
                            <mnv-paragraph>
                                Av. Pedro Calmon n°550 - Prédio da Reitoria.
                            </mnv-paragraph>
                            <mnv-paragraph>
                                2° andar - Cidade Universitária
                            </mnv-paragraph>
                            <mnv-paragraph>
                                Rio de Janeiro, RJ - CEP 21941-901
                            </mnv-paragraph>
                        </div>
                        <div class="contato">
                            <mnv-paragraph>
                                <i>Telefone</i>
                                : +55 (21) 3938-9600
                            </mnv-paragraph>
                            <mnv-paragraph>
                                <i>Fax</i>
                                : +55 (21) 3938-1605
                            </mnv-paragraph>
                        </div>
                    </div>
                </mnv-grid>
                <mnv-grid item sm="12" md="4">
                    <div>
                        <div>
                            <mnv-title level="h5">Campus Duque de Caxias</mnv-title>
                            <mnv-paragraph>
                                Rod. Washigton Luiz, KM 104 - 5°
                            </mnv-paragraph>
                            <mnv-paragraph>
                                <i>Telefone</i>
                                : (21) 2679-1018
                            </mnv-paragraph>
                            <hr/>
                        </div>
                        <div>
                            <mnv-title level="h5">Pólo Xerém UFRJ</mnv-title>
                            <mnv-paragraph>
                                Estr. de Xerém, 27°
                            </mnv-paragraph>
                            <mnv-paragraph>
                                <i>Telefone</i>
                                : (21) 2679-2098
                            </mnv-paragraph>
                            <hr/>
                        </div>
                        <div>
                            <mnv-title level="h5">
                                Acesso à Graduação da UFRJ
                            </mnv-title>
                            <mnv-paragraph>
                                <i>Telefone</i>
                                : 3938-9430
                            </mnv-paragraph>
                            <mnv-paragraph>
                                <i>Email</i>
                                : acessograduacao@ufrj.br
                            </mnv-paragraph>
                        </div>
                    </div>
                </mnv-grid>      
            </mnv-grid>
        </footer>
    )
}
