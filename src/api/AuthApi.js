import axios from './axiosConfig';
import querystring from 'query-string';

const URL_REGISTRATION = '/auth/registration';
const URL_LOGIN = '/auth/login';
const URL_REFRESH = '/auth/refresh';

export const registration = function (name, lastname, email, username, password) {
  const user = {
    name,
    lastname,
    email,
    username,
    password,
  }
  return axios.post(URL_REGISTRATION, user).
      then().
      catch(error => {
        throw error;
      });
};

export const login = function (username, password) {
  const user = {
    username,
    password,
  }
  return axios.post(URL_LOGIN, querystring.stringify(user),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
      then( response => response.headers).
      catch(error => {
        throw error;
      });
};

export const refresh = function (token) {
  return axios.get(URL_REFRESH, {headers: {'Authorization': token}}).
      then(response => response.headers.authorization).
      catch(error => {
        throw error;
      });
};
