import { Component, h, Prop } from '@stencil/core';
import { getAsync } from '../../services/content.js';


@Component({
    tag: 'mnv-title',
    styleUrl: 'mnv-title.css',
    shadow: true,
})
export class MnvTitle {

    @Prop() level: string;
    @Prop() overline: string;


    async componentDidLoad() {
        console.log(await getAsync());
    }

    // Renderiza o componente
    render() {
        switch (this.level) {
            case 'h1': 
                return (
                    <div>
                        <span>{this.overline}</span>
                        <h1><slot/></h1>
                    </div>
                );
            case 'h2': 
                return (
                    <div>
                        <span>{this.overline}</span>
                        <h2><slot/></h2>
                    </div>
                );
            case 'h3': 
                return (
                    <div>
                        <span>{this.overline}</span>
                        <h3><slot/></h3>
                    </div>
                );
            case 'h4': 
                return (
                    <div>
                        <span>{this.overline}</span>
                        <h4><slot/></h4>
                    </div>
                );
            case 'h5': 
                return (
                    <div>
                        <span>{this.overline}</span>
                        <h5><slot/></h5>
                    </div>
                );
            default: return <p>Level Inexistente</p>;
        }
    }
}
