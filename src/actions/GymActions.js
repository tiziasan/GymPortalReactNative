import {GYM_FETCH, GYMS_FETCH} from '../stores/ActionType';
import * as API from '../api';
import {
  sAppFilterSearchGym,
  sAppFilterSelectRegion,
} from '../reducers/AppReducer';

export function gymsFetch(){
  return (dispatch, getState) => {
    const storeState = getState();
    const name = sAppFilterSearchGym(storeState);
    const region = sAppFilterSelectRegion(storeState);
    if (name === "" && region === "") {
      dispatch({
        type: GYMS_FETCH,
        payload: API.getAllGyms().then(r => ({gyms: r}))
      });
    }
    if (name === "" &&  region !== ""){
      dispatch({
        type: GYMS_FETCH,
        payload: API.getGymsByRegion(region).then(r => ({gyms: r}))
      });
    }
    if (name !== "" &&  region === ""){
      dispatch({
        type: GYMS_FETCH,
        payload: API.getGymsByName(name).then(r => ({gyms: r}))
      });
    }
  };
}

export function gymFetch(idGym){
  return {
    type: GYM_FETCH,
    payload: API.getGym(idGym).then(r => ({gym: r}))
  };
}
