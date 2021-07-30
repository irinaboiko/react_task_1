import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsyncOperationPageLayout from "../components/AsyncLayout";
import { GET_POKEMON_REQUEST } from "../actions";

const AsyncOperationsPageContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_POKEMON_REQUEST());
  }, [dispatch]);

  return <AsyncOperationPageLayout pokemons={[]} />;
};

export default AsyncOperationsPageContainer;
