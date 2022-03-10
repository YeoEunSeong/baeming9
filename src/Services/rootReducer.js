import { combineReducers } from "redux";
import ItemsReducer from "./ItemReducer";

const rootReducer = combineReducers({ ItemsReducer });

export default rootReducer;
