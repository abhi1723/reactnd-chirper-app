import { combineReducers } from "redux";
import  tweets  from "./tweets";
import  authedUser  from "./authedUser";
import  users  from "./users";
import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
  users,
  tweets,
  authedUser,
  loadingBar : loadingBarReducer
})