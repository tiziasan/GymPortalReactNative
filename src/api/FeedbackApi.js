import axios from './axiosConfig';

const URL_GYMS = 'gyms/';
const URL_COURSES = '/courses/';
const URL_FEEDBACKS = '/feedbacks/';


export const getFeedbacksByGym = function (idGym) {
  return axios.get(URL_GYMS + idGym + URL_FEEDBACKS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const addFeedbackGym = function (feedback, token) {
  return axios.post(URL_GYMS + feedback.gym + URL_FEEDBACKS, feedback, {headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then(response => response.headers.location.substring(response.headers.location.lastIndexOf('/') + 1)).
      catch(error => {
        throw error;
      });
};

export const updateFeedbackGym = function (feedback, token) {
  return axios.put(URL_GYMS + feedback.gym + URL_FEEDBACKS + feedback.id, feedback, {headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then().
      catch(error => {
        throw error;
      });
};

export const deleteFeedbackGym = function (feedback, token) {
  return axios.delete(URL_GYMS + feedback.gym + URL_FEEDBACKS + feedback.id, {headers: {'Authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};



export const getFeedbacksByCourse = function (idGym, idCourse) {
  return axios.get(URL_GYMS + idGym + URL_COURSES + idCourse + URL_FEEDBACKS).
      then(response => response.data).
      catch(error => {
        throw error;
      });
};

export const addFeedbackCourse = function (idGym, feedback, token) {
  return axios.post(URL_GYMS + idGym + URL_COURSES + feedback.course + URL_FEEDBACKS, feedback, {headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then(response => response.headers.location.substring(response.headers.location.lastIndexOf('/') + 1)).
      catch(error => {
        throw error;
      });
};

export const updateFeedbackCourse = function (idGym, feedback, token) {
  return axios.put(URL_GYMS + idGym + URL_COURSES + feedback.course + URL_FEEDBACKS + feedback.id, feedback, {headers: {'Authorization': token, 'Content-Type': 'application/json'}}).
      then().
      catch(error => {
        throw error;
      });
};

export const deleteFeedbackCourse = function (idGym, feedback, token) {
  return axios.delete(URL_GYMS + idGym + URL_COURSES + feedback.course + URL_FEEDBACKS + feedback.id, {headers: {'Authorization': token}}).
      then().
      catch(error => {
        throw error;
      });
};
