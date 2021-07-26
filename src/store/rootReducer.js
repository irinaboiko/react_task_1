import { combineReducers } from "redux";

import counterManagerPage from "../pages/ReduxCounterManagerPage/reducers";

const rootReducer = combineReducers({ counterManagerPage });

export default rootReducer;
