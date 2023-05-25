import { createStore } from "redux";
import { pageReducer, categoryReducer } from "./reducers";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  pageNumber: pageReducer,
  category: categoryReducer,
});
export const store = createStore(allReducers);
