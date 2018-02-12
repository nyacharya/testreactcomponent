import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import fetchdata from "./fetchdata_reducder";
const rootReducer = combineReducers({
  fetchdata: fetchdata,
//   users: UserReducer,
});

export default rootReducer;
