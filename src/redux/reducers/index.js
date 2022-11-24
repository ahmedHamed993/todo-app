import { combineReducers } from "redux";
import  todosReducer  from "./todosReducer";
import modeReducer from "./modeReducer";
export default combineReducers({
    todosReducer,
    modeReducer,
});
