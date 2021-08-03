import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AsyncOperationPageLayout from "../components/AsyncLayout";
import { GET_POKEMON_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const AsyncOperationsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { pokeList, isLoading } = useSelector((state) => state.pokemonPage);

  const handleGoToPokemonDetails = useCallback((pokemonName) => {
    history.push(`${ROUTES.POKEMONS_PAGE}/${pokemonName}`);
  }, []);

  useEffect(() => {
    dispatch(GET_POKEMON_REQUEST());
  }, [dispatch]);

  return (
    <AsyncOperationPageLayout
      pokemons={pokeList}
      handleGoToPokemonDetails={handleGoToPokemonDetails}
      isLoading={isLoading}
    />
  );
};

export default AsyncOperationsPageContainer;
