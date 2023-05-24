import checkLogin from "./Check";
import sreachValue from "./SreachValue";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    checkLogin,
    sreachValue,
});

export default rootReducer;
