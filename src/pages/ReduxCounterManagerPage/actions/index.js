import { createAction } from "redux-actions";

export const ADD_NEW_COUNTER = createAction("ADD_NEW_COUNTER");
export const REMOVE_COUNTER = createAction("REMOVE_COUNTER");
export const INCREMENT_COUNTER = createAction("INCREMENT_COUNTER");
export const RESET_ALL_COUNTERS = createAction("RESET_ALL_COUNTERS");
export const DECREMENT_COUNTER = createAction("DECREMENT_COUNTER");
export const RESET_COUNTER = createAction("RESET_COUNTER");
