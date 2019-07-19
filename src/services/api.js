import Axios from "axios";

const config = Axios.create({
  baseURL: '',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});

export default config;