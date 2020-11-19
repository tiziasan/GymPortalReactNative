import {
  LOADING,
  LOADING_END,
  USER_LOGGED_IN,
  USER_LOGGED_IN_FAIL,
  USER_LOGGED_IN_SUCCESS,
  USER_LOGGED_OUT,
  GUEST_FORM_CHANGE_VALUE,
  GUEST_FORM_RESET,
  GUEST_SIGN_UP,
  GUEST_SIGN_UP_FAIL,
  GUEST_SIGN_UP_SUCCESS,
  FILTER_CHANGE_VALUE,
  FILTER_RESET,
} from '../stores/ActionType';

const INITIAL_STATE = {
  logged: false,

  loading: false,
  loadingSeconds: 0,

  guestForm: {
    name: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  },

  filter:{
    searchGym:'',
    selectRegion:'',
    searchCourse:'',
  }
};

const sApp = (state) => state.app;
export const sAppLogged = (state) => sApp(state).logged;
export const sAppLoading = (state) => sApp(state).loading;

const sAppGuestForm = (state) => sApp(state).guestForm;
export const sAppGuestFormName = (state) => sAppGuestForm(state).name;
export const sAppGuestFormLastname = (state) => sAppGuestForm(state).lastname;
export const sAppGuestFormEmail = (state) => sAppGuestForm(state).email;
export const sAppGuestFormUsername = (state) => sAppGuestForm(state).username;
export const sAppGuestFormPassword = (state) => sAppGuestForm(state).password;

const sAppFilter = (state) => sApp(state).filter;
export const sAppFilterSearchGym = (state) => sAppFilter(state).searchGym;
export const sAppFilterSelectRegion = (state) => sAppFilter(state).selectRegion;
export const sAppFilterSearchCourse = (state) => sAppFilter(state).searchCourse;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        loadingSeconds: state.loadingSeconds + 1
      };
    case LOADING_END:
      return {
        ...state,
        loading: false,
      };

    case USER_LOGGED_IN:
      return {
        ...state,
        logged: false,
        loading: true,
      };
    case USER_LOGGED_IN_FAIL:
      return {
        ...state,
        logged: false,
        loading: false,
      };
    case USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        logged: true,
        loading: false,
      };

    case GUEST_FORM_CHANGE_VALUE:
      return {
        ...state,
        guestForm: {
          ...state.guestForm,
          [action.payload.field]: action.payload.value
        }
      };
    case GUEST_FORM_RESET:
      return {
        ...state,
        guestForm: {
          ...INITIAL_STATE.guestForm
        }
      };

    case GUEST_SIGN_UP:
      return {
        ...state,
        loading: true,
        guestForm: {
          ...state.guestForm,
        }
      };
    case GUEST_SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        guestForm: {
          ...state.guestForm,
        }
      };
    case GUEST_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        guestForm: {
          ...state.guestForm,
        }
      };

    case FILTER_CHANGE_VALUE:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.field]: action.payload.value
        }
      };
    case FILTER_RESET:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.field]: ''
        }
      };

    case USER_LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
