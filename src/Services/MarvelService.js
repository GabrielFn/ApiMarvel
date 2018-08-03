import axios from '../Utils/Axios';

class MarvelService {
  consultarPersonagens(limit, offset) {
    return axios.get(`/v1/public/characters?limit=${limit}&offset=${offset}`);
  }
}

export default new MarvelService();
