import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  pokeList: [],
  isLoading: false,
  errors: null,
};

const pokemonPageReducer = handleActions(
  {
    [actions.GET_POKEMON_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMON_SUCCESS]: (state, payload) => ({
      ...state,
      isLoading: false,
      pokeList: payload,
    }),
    [actions.GET_POKEMON_FAIL]: (state, payload) => ({
      ...state,
      isLoading: false,
      errors: payload,
    }),
  },
  defaultState
);

export default pokemonPageReducer;
