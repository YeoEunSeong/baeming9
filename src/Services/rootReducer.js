import { combineReducers } from "redux";
import ItemsReducer from "./Reducers/ItemReducer";
import isLoginReducer from "./Reducers/isLoginReducer";
import selectItem from "./Reducers/selectItem";

const rootReducer = combineReducers({
  ItemsReducer,
  isLoginReducer,
  selectItem,
});

export default rootReducer;
