import axios from 'axios';
import { Platform } from 'react-native';

let url;
switch (Platform.OS) {
  case 'android':
    url = 'http://10.0.2.2:8080/GymREST/rest';
    break;
  case 'ios':
    url = 'http://localhost:8080/GymREST/rest';
    break;
  default:
    url = 'http://localhost:8080/GymREST/rest';
}

const instance = axios.create({
  baseURL: url
});

instance.interceptors.request.use(request => {
  // request.headers.Authorization = token;  //https://dev.to/axotion/why-you-shouldn-t-use-axios-interceptors-with-redux-16ff
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  console.log('response ' + response.config.url,response);
  // Edit response config
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export default instance;
