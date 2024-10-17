import { createStore, combineReducers } from "redux";
import todoReducer from "./todolistReducer";
import counterReducer from "./counterReducer";

var store = createStore(combineReducers({counterReducer,todoReducer}))
export default store;