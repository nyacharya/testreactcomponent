import { FETCHDATA } from "../actions/constant";

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {

  case FETCHDATA.GET_DATA_SUCCESS:
    return { ...state, getdata: payload };
  case FETCHDATA.GET_DATA_RESET:
    return { ...state, dashboard: payload };
  case FETCHDATA.GET_DATA_FAILURE:
    return { ...state, getdataFailure: payload };

  default:
    return state;
  }
}
