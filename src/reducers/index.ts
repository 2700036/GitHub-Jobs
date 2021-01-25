import { combineReducers } from "redux";

import jobs from "./jobs";
import app from "./app";

export default combineReducers({
  jobs,
  app
});