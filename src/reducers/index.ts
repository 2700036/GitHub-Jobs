import { combineReducers } from "redux";

import jobs from "./jobs";
import app from "./app";

export const reducer = combineReducers({
  jobs,
  app
});