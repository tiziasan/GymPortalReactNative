import axios from './axiosConfig';

const URL_GYMS = 'gyms';

export const getAllGyms = function () {
  return axios.get(URL_GYMS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const getGymsByName = function (name) {
  return axios.get(URL_GYMS + "?name=" + name).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const getGymsByRegion = function (region) {
  return axios.get(URL_GYMS + "?region=" + region).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const getGym = function (idGym) {
  return axios.get(URL_GYMS + "/" + idGym).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

