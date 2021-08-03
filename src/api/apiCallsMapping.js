import * as asyncPageActions from "../pages/AsyncOperationsPage/actions";
import * as asyncOperationsAPI from "../pages/AsyncOperationsPage/api";

import * as pokemonDetailsActions from "../pages/PokemonDetailsPage/actions";
import * as pokemonDetailsAPI from "../pages/PokemonDetailsPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [asyncPageActions.GET_POKEMON_REQUEST]: asyncOperationsAPI.getPokemons,

    [pokemonDetailsActions.GET_POKEMONS_DETAILS_REQUEST]:
      pokemonDetailsAPI.getPokemonDetails,
  };

  if (!mapping[action.type]) {
    throw Error("Not mapped action");
  }

  return mapping[action.type];
};

export default apiCallsMapping;
