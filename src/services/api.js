import Axios from "axios";

const config = Axios.create({
  baseURL: 'http://172.17.0.1/wp-json/acf/v3/options/adm-secoess',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});

export default config;