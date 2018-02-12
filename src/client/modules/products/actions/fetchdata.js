import { data } from "../../../constant";
import { FETCHDATA } from "./constant";

export function getSuccess(SUCCESS, data) {
  return {
    type: SUCCESS,
    payload: data,
  };
}

export function getFailure(FAILURE, error) {
  return {
    type: FAILURE,
    payload: error,
  };
}

export function getReset(RESET) {
  return {
    type: RESET,
    payload: null,
  };
}
export function fetchData() {
  return function(dispatch) {
    // dispatch(getSuccess(FETCHDATA.GET_DATA_RESET))
    dispatch(getSuccess(FETCHDATA.GET_DATA_SUCCESS, data));
  };
};
