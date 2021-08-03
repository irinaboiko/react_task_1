import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defailtState = {
  pokemonInfo: [],
  isLoading: false,
  errors: null,
};

const pokemonDetailsReducer = handleActions(
  {
    [actions.GET_POKEMONS_DETAILS_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [actions.GET_POKEMONS_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemonInfo: {
        ...payload.response,
      },
    }),
    [actions.GET_POKEMONS_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defailtState
);

export default pokemonDetailsReducer;
