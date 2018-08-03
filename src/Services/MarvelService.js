import axios from '../Utils/Axios';

class MarvelService {
  consultarPersonagens() {
    return axios.get('/v1/public/characters');
  }
}

export default new MarvelService();
