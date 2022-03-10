import { combineReducers } from "redux";
import ItemsReducer from "./Reducers/ItemReducer";
import isLoginReducer from "./Reducers/isLoginReducer";

const rootReducer = combineReducers({ ItemsReducer, isLoginReducer });

export default rootReducer;
