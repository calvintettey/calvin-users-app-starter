import allusersReducer from "./allusersReducer";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
  usersState: allusersReducer,
  firebase: firebaseReducer,
});
