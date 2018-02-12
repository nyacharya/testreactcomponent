import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import getdetail from "./detaildata_reducer";
const rootReducer = combineReducers({
  getdetail: getdetail,
  getdetail: getdetail,
//   users: UserReducer,
});

export default rootReducer;
