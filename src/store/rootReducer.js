import { combineReducers } from "redux";

import counterManagerPage from "../pages/ReduxCounterManagerPage/reducers";
import pokemonPage from "../pages/AsyncOperationsPage/reducers";

const rootReducer = combineReducers({ counterManagerPage, pokemonPage });

export default rootReducer;
