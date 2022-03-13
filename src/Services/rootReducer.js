import { combineReducers } from "redux";
import ItemsReducer from "./Reducers/ItemReducer";
import isLoginReducer from "./Reducers/isLoginReducer";
import selectItemReducer from "./Reducers/selectItemReducer";

const rootReducer = combineReducers({
  ItemsReducer,
  isLoginReducer,
  selectItemReducer,
});

export default rootReducer;
