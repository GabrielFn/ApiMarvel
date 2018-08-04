import axios from '../Utils/Axios';

class MarvelService {
  consultarPersonagens(offset, ordem) {
    return axios.get(`/v1/public/characters?limit=${12}&offset=${offset}&orderBy=${ordem}`);
  }

  buscaPersonagens(name, offset, ordem) {
    return axios.get(`/v1/public/characters?nameStartsWith=${name}&limit=${12}&offset=${offset}&orderBy=${ordem}`)
  }
}

export default new MarvelService();
