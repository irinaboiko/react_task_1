import React, {useCallback, useEffect, useMemo, useState} from 'react';
import CounterView from "../../../commonComponents/CounterView";
import {useCounter} from "../../../hooks";

const FunctionalCounterContainer = () => {
  const [countValue, handleIncrement, handleDecrement, handleReset] = useCounter(0);

  const parityType = useMemo(() => {
    return countValue % 2 ? 'odd' : 'even';
  }, [countValue]);

  /*const [counterState, setCounterState] = useState( {
    countValue: 0,
    parityType: 'even'
  });

  useEffect(() => {
    setCounterState({
      ...counterState,
      parityType: counterState.countValue % 2 ? 'odd' : 'even'
    });
  }, [counterState.countValue]);

  const handleIncrement = useCallback(() => {
    //console.log('increment counter');
    setCounterState({
      ...counterState,
      countValue: counterState.countValue + 1
    });
  }, [counterState.countValue]);

  const handleDecrement = useCallback( () => {
    //console.log('decrement counter');
    if (counterState.countValue > 0) {
      setCounterState({
        ...counterState,
        countValue: counterState.countValue - 1
      });
    }
  }, [counterState.countValue]);

  const handleReset = useCallback(() => {
    //console.log('reset counter');
    setCounterState({
      ...counterState,
      countValue: 0
    });
  }, []);*/

  return (
    <CounterView
      countValue={countValue}
      parityType={parityType}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
