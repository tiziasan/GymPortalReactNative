import axios from './axiosConfig';

const URL_USERS = 'users/' ;
const URL_FAVORITE_GYMS = '/favorites/gyms/' ;
const URL_FAVORITE_COURSES = '/favorites/courses/' ;


export const getAllFavoriteGyms = function (idUser, token) {
  return axios.get(URL_USERS + idUser + URL_FAVORITE_GYMS, {headers: {'Authorization': token}}).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const addGymToFavorite = function (idUser, idGym, token) {
  return axios.post(URL_USERS + idUser + URL_FAVORITE_GYMS, idGym.toString(),{headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then().
      catch(error => {
        throw error;
      });
};

export const removeGymToFavorite = function (idUser, idGym, token) {
  return axios.delete(URL_USERS + idUser + URL_FAVORITE_GYMS + idGym,{headers: {'Authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};



export const getAllFavoriteCourses = function (idUser, token) {
  return axios.get(URL_USERS + idUser + URL_FAVORITE_COURSES, {headers: {'Authorization': token}}).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const addCourseToFavorite = function (idUser, idCourse, token) {
  return axios.post(URL_USERS + idUser + URL_FAVORITE_COURSES, idCourse.toString(),{headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then().
      catch(error => {
        throw error;
      });
};

export const removeCourseToFavorite = function (idUser, idCourse, token) {
  return axios.delete(URL_USERS + idUser + URL_FAVORITE_COURSES + idCourse,{headers: {'Authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};

