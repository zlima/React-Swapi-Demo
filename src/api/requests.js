import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SWAPI_BASE_URL;

const { get: axiosGet } = axios;

const onSuccess = (response) => response.data;

const onError = (error) => Promise.reject(error);

export const get = (...args) =>
  axiosGet(...args)
    .then(onSuccess)
    .catch(onError);
