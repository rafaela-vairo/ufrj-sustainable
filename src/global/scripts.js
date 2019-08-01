import Axios from 'axios'

const Api = Axios.create({
	baseURL: 'https://sust-dev.olimpo.tic.ufrj.br/wp-json/',
})

export default Api
