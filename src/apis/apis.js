import axios from 'axios';

export const axiosRequest = axios.create({
  baseURL: 'https://airline-manager-backend.herokuapp.com/',
  // cancelToken: new axios.CancelToken((c) => (value = c)),
});
