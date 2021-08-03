import api from "../../../api/config";

export const getPokemonDetails = (pokemonName) =>
  api.get(`/pokemon/${pokemonName}`);
