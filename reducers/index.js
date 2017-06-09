import { combineReducers } from "redux";
import trendReducer from "./trendReducer";

const allReducers = combineReducers({
  trending: trendReducer
});

export default allReducers;