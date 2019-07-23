import Api from './api';

// Obtém todos os conteúdos (Heropage_imagem)
export const getAsync = async () => {
  try {
    return (await Api.get('/wp-json/acf/v3/options/adm-secoes')).data['acf']['cabecalho']['Heropage_imagem'];
  } catch (e) {
    console.log(e);
    return null;
  }
}
