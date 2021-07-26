import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  counters: [],
};

const counterManagerReducer = handleActions(
  {
    [actions.ADD_NEW_COUNTER]: (state, action) => {
      const updatedCounters = [...state.counters, { countValue: 0 }];

      return {
        ...state,
        counters: updatedCounters,
      };
    },
    [actions.REMOVE_COUNTER]: (state, action) => {
      const updatedCounters = [...state.counters];
      updatedCounters.pop();

      return {
        ...state,
        counters: updatedCounters,
      };
    },
    [actions.RESET_ALL_COUNTERS]: (state, action) => {
      return {
        ...state,
        counters: [],
      };
    },
    [actions.INCREMENT_COUNTER]: (state, action) => {
      const updatedCounters = [...state.counters];

      updatedCounters[action.payload].countValue =
        updatedCounters[action.payload].countValue + 1;

      return {
        ...state,
        counters: updatedCounters,
      };
    },
    [actions.DECREMENT_COUNTER]: (state, action) => {
      const updatedCounters = [...state.counters];

      if (updatedCounters[action.payload].countValue > 0) {
        updatedCounters[action.payload].countValue =
          updatedCounters[action.payload].countValue - 1;
      }

      return {
        ...state,
        counters: updatedCounters,
      };
    },
    [actions.RESET_COUNTER]: (state, action) => {
      const updatedCounters = [...state.counters];

      updatedCounters[action.payload].countValue = 0;

      return {
        ...state,
        counters: updatedCounters,
      };
    },
  },
  defaultState
);

export default counterManagerReducer;
