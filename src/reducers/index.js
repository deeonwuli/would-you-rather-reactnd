import { combineReducers } from "redux";
import questions from "./questions";
import authedUser from "./authedUser";
import users from "./users";

export default combineReducers({
  authedUser,
  users,
  questions,
});
