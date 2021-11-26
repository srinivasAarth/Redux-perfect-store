import { createStore } from "redux";
import { rootReducers } from "./CombindingReducers";

const store = createStore(rootReducers)

export default store;