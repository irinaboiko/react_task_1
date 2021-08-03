import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import PokemonLayout from "../components/PokemonLayout";
import { GET_POKEMONS_DETAILS_REQUEST } from "../actions";

const PokemonPageContainer = () => {
  const { pokemonName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_POKEMONS_DETAILS_REQUEST(pokemonName));
  }, [dispatch]);

  return <PokemonLayout pokemonName={pokemonName} />;
};

export default PokemonPageContainer;
