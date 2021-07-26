import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReduxManagerLayout from "../components/Layout/ReduxManagerLayout";
import {
  ADD_NEW_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  REMOVE_COUNTER,
  RESET_ALL_COUNTERS,
  RESET_COUNTER,
} from "../actions";

const ReduxCounterManagerContainer = () => {
  const dispatch = useDispatch();

  const handleCounterCreate = useCallback(() => {
    dispatch(ADD_NEW_COUNTER());
  }, [dispatch]);

  const handleCounterRemove = useCallback(() => {
    dispatch(REMOVE_COUNTER());
  }, [dispatch]);

  const handleResetCounters = useCallback(() => {
    dispatch(RESET_ALL_COUNTERS());
  }, [dispatch]);

  const handleIncrement = useCallback(
    (index) => {
      dispatch(INCREMENT_COUNTER(index));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (index) => {
      dispatch(DECREMENT_COUNTER(index));
    },
    [dispatch]
  );

  const handleResetCounter = useCallback(
    (index) => {
      dispatch(RESET_COUNTER(index));
    },
    [dispatch]
  );

  const { counters } = useSelector((state) => state.counterManagerPage);

  return (
    <ReduxManagerLayout
      counters={counters}
      handleCounterCreate={handleCounterCreate}
      handleCounterRemove={handleCounterRemove}
      handleResetCounters={handleResetCounters}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleResetCounter={handleResetCounter}
    />
  );
};

export default ReduxCounterManagerContainer;
