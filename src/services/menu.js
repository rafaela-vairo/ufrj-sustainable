import Api from './api';

// Obtém todos os menus (secoes)
export const getAsync = async () => {
  try {
    return (await Api.get('/wp-json/acf/v3/options/adm-secoes')).data['acf']['secoes'];
  } catch (e) {
    console.log(e);
    return null;
  }
}