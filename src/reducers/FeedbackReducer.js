import {
  FEEDBACK_CHANGE_VALUE,
  FEEDBACK_COURSE_ADD, FEEDBACK_COURSE_DELETE,
  FEEDBACK_COURSE_UPDATE,
  FEEDBACK_GYM_ADD, FEEDBACK_GYM_DELETE,
  FEEDBACK_GYM_UPDATE,
  FEEDBACK_RESET,
  FEEDBACKS_COURSE_FETCH,
  FEEDBACKS_COURSE_RESET,
  FEEDBACKS_GYM_FETCH,
  FEEDBACKS_GYM_RESET,
  USER_LOGGED_OUT,
} from '../stores/ActionType';

const INITIAL_STATE = {
  feedback:{
    id:0,
    rating:5,
    feed:"",
  },
  feedbacksGym: [],
  feedbacksCourse: [],
  loading: false,
};

const sFeedback = (state) => state.feedback;
export const sFeedbacksCurrentFeedback = state => sFeedback(state).feedback;
export const sFeedbacksGym = state => sFeedback(state).feedbacksGym;
export const sFeedbacksExistingFeedbackByUserIdAndGymId = (idUser, idGym) => state => sFeedback(state).feedbacksGym.find( el => (el.user === idUser && el.gym === idGym));
export const sFeedbacksCourse = state => sFeedback(state).feedbacksCourse;
export const sFeedbacksExistingFeedbackByUserIdAndCourseId = (idUser, idCourse) => state => sFeedback(state).feedbacksCourse.find( el => (el.user === idUser && el.course === idCourse));
export const sFeedbackLoading = state => sFeedback(state).loading;

export default function(state = INITIAL_STATE, action) {
  let array, index;
  switch (action.type) {
    case `${FEEDBACKS_GYM_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FEEDBACKS_GYM_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FEEDBACKS_GYM_FETCH}_FULFILLED`:
      return {
        ...state,
        feedbacksGym: action.payload.feedbacks,
        loading: false,
      };

    case FEEDBACK_GYM_ADD:
      return {
        ...state,
        feedbacksGym: [...state.feedbacksGym, action.payload.feedback],
      };
    case FEEDBACK_GYM_UPDATE:
      array = [...state.feedbacksGym];
      index = array.findIndex( el => el.id === action.payload.feedback.id);
      array[index] = action.payload.feedback
      return {
        ...state,
        feedbacksGym: array,
      };
    case FEEDBACK_GYM_DELETE:
      return {
        ...state,
        feedbacksGym: [...state.feedbacksGym.filter( el => el.user !== action.payload.feedback.user )]
      };

    case FEEDBACKS_GYM_RESET:
      return {
        ...state,
        feedbacksGym: []
      };


    case `${FEEDBACKS_COURSE_FETCH}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${FEEDBACKS_COURSE_FETCH}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${FEEDBACKS_COURSE_FETCH}_FULFILLED`:
      return {
        ...state,
        feedbacksCourse: action.payload.feedbacks,
        loading: false,
      };

    case FEEDBACK_COURSE_ADD:
      return {
        ...state,
        feedbacksCourse: [...state.feedbacksCourse, action.payload.feedback],
      };
    case FEEDBACK_COURSE_UPDATE:
      array = [...state.feedbacksCourse];
      index = array.findIndex( el => el.id === action.payload.feedback.id);
      array[index] = action.payload.feedback
      return {
        ...state,
        feedbacksCourse: array,
      };
    case FEEDBACK_COURSE_DELETE:
      return {
        ...state,
        feedbacksCourse: [...state.feedbacksCourse.filter( el => el.user !== action.payload.feedback.user )]
      };

    case FEEDBACKS_COURSE_RESET:
      return {
        ...state,
        feedbacksCourse: []
      };



    case FEEDBACK_CHANGE_VALUE:
      return {
        ...state,
        feedback:{
          ...state.feedback,
          [action.payload.field]: action.payload.value
        }
      };
    case FEEDBACK_RESET:
      return {
        ...state,
        feedback: {
          rating: 5,
          feed: ""
        }
      };

    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

