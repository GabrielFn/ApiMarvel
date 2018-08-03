import axios from 'axios';

let baseURL = 'https://gateway.marvel.com';

const axiosInstance = axios.create({
  timeout: 40000,
  baseURL,
});

axiosInstance.interceptors.request.use(
  function(config) {

    if(config.url.indexOf("?") > -1){
        config.url = `${config.url}&apikey=99316b009b2f46e587171504258be133`
    }
    else {
        config.url = `${config.url}?apikey=99316b009b2f46e587171504258be133`
    }

    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
