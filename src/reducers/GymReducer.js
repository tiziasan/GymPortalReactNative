import {
  COURSE_FETCH,
  COURSES_FETCH,
  GYM_FETCH,
  GYMS_FETCH,
  USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: [],
  loading: false,
};

const sGym = (state) => state.gym;
export const sGymLoadedGyms = state => sGym(state).gyms;
export const sGymLoadedGymById = id => state => sGym(state).gyms.find( el => el.id === id)
export const sGymLoadedCoursesByGymId = id => state => sGym(state).gyms.find(el => el.id === id).courses
export const sGymLoadedCoursesByGymIdAndCourseId = (idGym, idCourse) => state => {
  if(sGym(state).gyms.find( el => el.id === idGym).courses === undefined) {
    return null;
  } else {
    return sGym(state).gyms.find(el => el.id === idGym).courses.find(e => e.id === idCourse)
  }
}
export const sGymLoading = state => sGym(state).loading;

export default function(state = INITIAL_STATE, action) {
  let array, index;
  switch (action.type) {
    case `${GYMS_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GYMS_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${GYMS_FETCH}_FULFILLED`:
      return {
        ...state,
        gyms: action.payload.gyms,
        loading: false,
      };

    case `${GYM_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GYM_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${GYM_FETCH}_FULFILLED`:
      array = [...state.gyms];
      index = state.gyms.findIndex( el => el.id === action.payload.gym.id);
      array[index] = action.payload.gym
      return {
        ...state,
        gyms: array,
        loading: false,
      };


    case `${COURSES_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${COURSES_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${COURSES_FETCH}_FULFILLED`:
      array = [...state.gyms];
      index = state.gyms.findIndex( el => el.id === action.payload.gym.id);
      array[index].courses = action.payload.courses;
      return {
        ...state,
        gyms: array,
        loading: false,
      };

    case `${COURSE_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${COURSE_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${COURSE_FETCH}_FULFILLED`:
      array = [...state.gyms];
      index = array.findIndex( el => el.id === action.payload.course.gym);
      if (array[index].courses === undefined){
        array[index].courses = [action.payload.course];
      }else{
        let index2 = array[index].courses.findIndex( el => el.id === action.payload.course.id);
        array[index].courses[index2] = action.payload.course;
      }
      return {
        ...state,
        gyms: array,
        loading: false,
      };

    // case USER_LOGGED_OUT:
    //   return INITIAL_STATE;
    default:
      return state;
  }
}

