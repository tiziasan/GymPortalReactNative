import axios from './axiosConfig';

const URL_USERS = 'users/' ;

export const getUser = function (id) {
  return axios.get(URL_USERS + id).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const userUpdate = function (user, token) {
  return axios.put(URL_USERS + user.id, user,{headers: {'authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};

