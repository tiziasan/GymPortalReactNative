import {
  FAVORITE_COURSE_ADD,
  FAVORITE_COURSE_FETCH, FAVORITE_COURSE_REMOVE,
  FAVORITE_GYM_ADD,
  FAVORITE_GYM_FETCH, FAVORITE_GYM_REMOVE, USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  gyms: [],
  courses: [],
  loading: false,
};

const sFavorite = (state) => state.favorite;
export const sFavoriteGyms = state => sFavorite(state).gyms;
export const sFavoriteCourses = state => sFavorite(state).courses;
export const sFavoriteLoading = state => sFavorite(state).loading;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${FAVORITE_GYM_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FAVORITE_GYM_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FAVORITE_GYM_FETCH}_FULFILLED`:
      return {
        ...state,
        gyms: action.payload.gyms,
        loading: false,
      };

    case FAVORITE_GYM_ADD:
      return {
        ...state,
        gyms: [...state.gyms, action.payload.gym]
      };
    case FAVORITE_GYM_REMOVE:
      return {
        ...state,
        gyms: [...state.gyms.filter( el => el.id !== action.payload.gym.id )]
      };


    case `${FAVORITE_COURSE_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FAVORITE_COURSE_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FAVORITE_COURSE_FETCH}_FULFILLED`:
      return {
        ...state,
        courses: action.payload.courses,
        loading: false,
      };

    case FAVORITE_COURSE_ADD:
      return {
        ...state,
        courses: [...state.courses, action.payload.course]
      };
    case FAVORITE_COURSE_REMOVE:
      return {
        ...state,
        courses: [...state.courses.filter( el => el.id !== action.payload.course.id )]
      };


    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

