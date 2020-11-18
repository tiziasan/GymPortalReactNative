import {COURSE_FETCH, COURSES_FETCH, GYMS_FETCH} from '../stores/ActionType';
import * as API from '../api'
import {
  sAppFilterSearchCourse,
} from '../reducers/AppReducer';


export function coursesFetch(idGym) {
  return (dispatch, getState) => {
    const storeState = getState();
    const name = sAppFilterSearchCourse(storeState);
    if (name === "") {
      dispatch({
        type: COURSES_FETCH,
        payload: API.getAllCourses(idGym).then(r => ({
          gym: {id: idGym},
          courses: r
        }))
      })
    } else {
      dispatch({
        type: COURSES_FETCH,
        payload: API.getCoursesByName(idGym, name).then(r => ({
          gym: {id: idGym},
          courses: r
        }))
      })
    }
  }
}

export function courseFetch(idGym, idCourse){
  return {
    type: COURSE_FETCH,
    payload: API.getCourse(idGym, idCourse).then(r => ({course: r}))
  };
}

