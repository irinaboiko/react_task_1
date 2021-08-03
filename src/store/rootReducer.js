import { combineReducers } from "redux";

import counterManagerPage from "../pages/ReduxCounterManagerPage/reducers";
import pokemonPage from "../pages/AsyncOperationsPage/reducers";
import pokemonDetails from "../pages/PokemonDetailsPage/reducers";

const rootReducer = combineReducers({
  counterManagerPage,
  pokemonPage,
  pokemonDetails,
});

export default rootReducer;
