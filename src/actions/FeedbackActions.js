import {
  FEEDBACK_GYM_ADD,
  FEEDBACK_RESET,
  FEEDBACK_GYM_UPDATE,
  FEEDBACKS_COURSE_FETCH,
  FEEDBACKS_GYM_FETCH,
  FEEDBACK_CHANGE_VALUE,
  FEEDBACK_COURSE_ADD,
  FEEDBACK_COURSE_UPDATE,
  FEEDBACKS_GYM_RESET,
  FEEDBACKS_COURSE_RESET,
  FEEDBACK_GYM_DELETE,
  FEEDBACK_COURSE_DELETE,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';
import {
  sFeedbacksCurrentFeedback,
} from '../reducers/FeedbackReducer';


export function feedbacksGymFetch(idGym){
  return {
    type: FEEDBACKS_GYM_FETCH,
    payload: API.getFeedbacksByGym(idGym).then(r => ({feedbacks: r}))
  }
}

export const feedbackGymAdd = function(idGym) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.gym = idGym;
    API.addFeedbackGym(feedback, token).
        then( (r) => {
          feedback.id = r
          dispatch({
            type: FEEDBACK_GYM_ADD,
            payload: {feedback}
          });
        })
  };
};
export const feedbackGymUpdate = function(idGym) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.gym = idGym;
    API.updateFeedbackGym(feedback, token).
        then( () => {
          dispatch({
            type: FEEDBACK_GYM_UPDATE,
            payload: {feedback}
          });
        })
  };
};
export const feedbackGymDelete = function(idGym) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.gym = idGym;
    let deletedFeedback = feedback;
    API.deleteFeedbackGym(feedback, token).
        then( () => {
          dispatch({
            type: FEEDBACK_GYM_DELETE,
            payload: {feedback: deletedFeedback}
          });
        })
  };
};

export const feedbacksGymReset = function() {
  return {
    type: FEEDBACKS_GYM_RESET,
  };
};



export function feedbacksCourseFetch(idGym, idCourse){
  return {
    type: FEEDBACKS_COURSE_FETCH,
    payload: API.getFeedbacksByCourse(idGym, idCourse).then(r => ({feedbacks: r}))
  }
}

export const feedbackCourseAdd = function(idGym, idCourse) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.course = idCourse;
    API.addFeedbackCourse(idGym, feedback, token).then( (r) => {
      feedback.id = r;
      dispatch({
        type: FEEDBACK_COURSE_ADD,
        payload: {feedback}
      });
    })
  };
};
export const feedbackCourseUpdate = function(idGym, idCourse) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.course = idCourse;
    API.updateFeedbackCourse(idGym, feedback, token).
        then( () => {
          dispatch({
            type: FEEDBACK_COURSE_UPDATE,
            payload: {feedback}
          });
        })
  };
};
export const feedbackCourseDelete = function(idGym, idCourse) {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState)
    const token = sUserToken(storeState);
    const feedback = sFeedbacksCurrentFeedback(storeState);
    feedback.user = user.id;
    feedback.course = idCourse;
    let deletedFeedback = feedback;
    API.deleteFeedbackCourse(idGym, feedback, token).
        then( () => {
          dispatch({
            type: FEEDBACK_COURSE_DELETE,
            payload: {feedback: deletedFeedback}
          });
        })
  };
};

export const feedbacksCourseReset = function() {
  return {
    type: FEEDBACKS_COURSE_RESET,
  };
};

export const feedbackChangeId = function(value) {
  return {
    type: FEEDBACK_CHANGE_VALUE,
    payload: {
      field: 'id',
      value,
    },
  };
};
export const feedbackChangeFeed = function(value) {
  return {
    type: FEEDBACK_CHANGE_VALUE,
    payload: {
      field: 'feed',
      value,
    },
  };
};
export const feedbackChangeRating = function(value) {
  return {
    type: FEEDBACK_CHANGE_VALUE,
    payload: {
      field: 'rating',
      value,
    },
  };
};

export const feedbackReset = function() {
  return {
    type: FEEDBACK_RESET,
  };
};

