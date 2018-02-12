import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postdata from "./postdata_reducder";
import getdetail from "./detaildata_reducer";
const rootReducer = combineReducers({
  form: formReducer,
  postdata: postdata,
  getdetail: getdetail,
//   users: UserReducer,
});

export default rootReducer;
