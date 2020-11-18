import {
  FAVORITE_COURSE_ADD,
  FAVORITE_COURSE_FETCH, FAVORITE_COURSE_REMOVE,
  FAVORITE_GYM_ADD,
  FAVORITE_GYM_FETCH, FAVORITE_GYM_REMOVE,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';


export function favoriteGymFetch(){
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);

    dispatch({
      type: FAVORITE_GYM_FETCH,
      payload: API.getAllFavoriteGyms(user.id, token).then(r => ({gyms: r}))
    });
  };
}

export function handleFavoriteGym(gym, isFavorite){
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);

    if (isFavorite){
      API.removeGymToFavorite(user.id, gym.id, token).
          then(()=>{
            dispatch({
              type: FAVORITE_GYM_REMOVE,
              payload: {gym}
            });
            // dispatch(favoriteGymFetch()); //invece di chiamare il fetch, gestire manualmente i favorite

          }).
          catch((error) => {
            // Handle Errors here.
            console.log(error.code, error.message);
          });
    } else {
      API.addGymToFavorite(user.id, gym.id, token).
          then(()=>{
            dispatch({
              type: FAVORITE_GYM_ADD,
              payload: {gym}
            });
          }).
          catch((error) => {
            // Handle Errors here.
            console.log(error.code, error.message);
          });
    }
  };
}



export function favoriteCourseFetch(){
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);

    dispatch({
      type: FAVORITE_COURSE_FETCH,
      payload: API.getAllFavoriteCourses(user.id, token).then(r => ({courses: r}))
    });
  };
}

export function handleFavoriteCourse(course, isFavorite){
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    if (isFavorite){
      API.removeCourseToFavorite(user.id, course.id, token).
          then(()=>{
            dispatch({
              type: FAVORITE_COURSE_REMOVE,
              payload: {course}
            });
          }).
          catch((error) => {
            // Handle Errors here.
            console.log(error.code, error.message);
          });
    } else {
      API.addCourseToFavorite(user.id, course.id, token).
          then(()=>{
            dispatch({
              type: FAVORITE_COURSE_ADD,
              payload: {course}
            });
          }).
          catch((error) => {
            // Handle Errors here.
            console.log(error.code, error.message);
          });
    }
  };
}
