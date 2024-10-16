import {createStore,combineReducers} from "redux";
import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";

var store = createStore (combineReducers({counterReducer,todoReducer}))
export default store