import React, {useState} from 'react';
import CounterView from "../../../commonComponents/CounterView";

const FunctionalCounterContainer = () => {
  const [counterState, setCounterState] = useState( {countValue: 0});
  return (
    <CounterView />
  );
};

export default FunctionalCounterContainer;
