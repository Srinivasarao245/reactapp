import {createStore,combineReducers} from "redux";
import todoReducer from "./todo.reducer";
import counterReducer from "./counter.reducer";

var store = createStore (combineReducers({counterReducer,todoReducer}))
export default store