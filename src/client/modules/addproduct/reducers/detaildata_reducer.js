import { GETDETAIL } from "../actions/constant";

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {

  case GETDETAIL.GET_DATA_SUCCESS:
    return { ...state, detaildata: payload };
  case GETDETAIL.GET_DATA_RESET:
    return { ...state, detaildata: payload };
  case GETDETAIL.GET_DATA_FAILURE:
    return { ...state, detaildataFailure: payload };

  default:
    return state;
  }
}
