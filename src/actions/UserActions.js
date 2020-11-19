import {
  USER_FORM_CHANGE_VALUE,
  USER_LOGGED_OUT, USER_REFRESH, USER_REFRESH_FAIL, USER_REFRESH_SUCCESS,
  USER_REFRESH_TOKEN,
  USER_UPDATE,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
} from '../stores/ActionType';
import * as API from '../api';
import {sUserProps, sUserToken} from '../reducers/UserReducer';


export const userLogout = function() {
  return {
    type: USER_LOGGED_OUT,
  }
};

export const userRefreshToken = function() {
  return (dispatch, getState) => {
    const storeState = getState();
    const token = sUserToken(storeState);
    API.refresh(token).
        then( response => {
          dispatch({
            type: USER_REFRESH_TOKEN,
            payload:  {
              token: response
            }
          });
        }).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
          dispatch(userLogout());
        });
  };
};

export const userRefresh = function() {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState);
    dispatch({type: USER_REFRESH});
    API.getUser(user.id).
        then(response => {
          dispatch({
            type: USER_REFRESH_SUCCESS,
            payload: {
              user: response
            }
          });
        }).
        catch( (error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
          dispatch({type: USER_REFRESH_FAIL});
          userLogout();
        });

  };
};


export const userFormChangeName = function(value) {
  return {
    type: USER_FORM_CHANGE_VALUE,
    payload: {
      field: 'name',
      value,
    },
  };
};

export const userFormChangeLastname = function(value) {
  return {
    type: USER_FORM_CHANGE_VALUE,
    payload: {
      field: 'lastname',
      value,
    },
  };
};

export const userFormChangeEmail = function(value) {
  return {
    type: USER_FORM_CHANGE_VALUE,
    payload: {
      field: 'email',
      value,
    },
  };
};

export const userFormChangeUsername = function(value) {
  return {
    type: USER_FORM_CHANGE_VALUE,
    payload: {
      field: 'username',
      value,
    },
  };
};

export const userFormChangePassword = function(value) {
  return {
    type: USER_FORM_CHANGE_VALUE,
    payload: {
      field: 'password',
      value,
    },
  };
};


export const userUpdate = function() {
  return (dispatch, getState) => {
    const storeState = getState();
    const user = sUserProps(storeState);
    const token = sUserToken(storeState);
    dispatch({type: USER_UPDATE});
    API.userUpdate(user,token).
        then(dispatch({type: USER_UPDATE_SUCCESS})).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
          dispatch({type: USER_UPDATE_FAIL});
          userRefresh();
        });

  };
};
