import { put, takeEvery, call } from "redux-saga/effects";

import { getPokemons } from "../api";

import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
} from "../actions";

function* getPokemonsWorker(action) {
  try {
    const response = yield call(getPokemons);

    console.log(response.data.results);

    yield put(GET_POKEMON_SUCCESS(response.data.results));
  } catch (error) {
    yield put(GET_POKEMON_FAIL(error.message));
  }
}

function* getPokemonsWatcher() {
  yield takeEvery(GET_POKEMON_REQUEST, getPokemonsWorker);
}

export default getPokemonsWatcher;
