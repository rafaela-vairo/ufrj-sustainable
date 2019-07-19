import Axios from "axios";

const config = Axios.create({
  baseURL: 'http://172.17.0.1',
});

export default config;