import { combineReducers } from "redux";
import FetchReducer from "../Reducers/FetchReducer";
import ManipulatReducer from "../Reducers/ManipulatReducer";

export const rootReducers = combineReducers({
    apiReducer : FetchReducer,
    manipulatingReducer : ManipulatReducer
})