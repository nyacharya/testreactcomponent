import { POSTDATA } from "../actions/constant";

const INITIAL_STATE = { all: [], isLoading: false };

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {

  case POSTDATA.POSTDATA_SUCCESS:
    return { ...state, postdata: payload, isLoading: true };
  case POSTDATA.POSTDATA_RESET:
    return { ...state, postdata: payload, isLoading: false };
  case POSTDATA.POSTDATA_FAILURE:
    return { ...state, postdataFailure: payload };

  default:
    return state;
  }
}
