import { combineReducers } from "redux";
import twitterReducer from "./twitterTrendsReducer";

const allReducers = combineReducers({
  trending: twitterReducer
});

export default allReducers;