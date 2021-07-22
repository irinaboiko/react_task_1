import React, {useCallback, useEffect, useState} from 'react';

import CounterOfCountersLayout from "../components/CounterOfCountersLayout";

import mockCounters from "../config/mockCounters";

const CounterOfCountersContainer = () => {
  const [countersList, setCountersList] = useState(mockCounters);

  useEffect(() => {

  }, [countersList]);



  const handleAdd = useCallback(() => {
    const countersListCopy = [...countersList];
    countersListCopy.push({
      countValue: 0
    });
    setCountersList(countersListCopy);
  }, [countersList]);

  const handleRemove = useCallback(() => {
    const countersListCopy = [...countersList];
    countersListCopy.pop();
    setCountersList(countersListCopy);
  }, [countersList]);

  const handleReset = useCallback(() => {
    setCountersList([]);
  }, [countersList]);

  const counterRemove = useCallback((index) => {
    console.log(index);
  }, []);

  return (
    <div>
      <CounterOfCountersLayout
        countersList={countersList}
        onAddButtonClick={handleAdd}
        onRemoveButtonClick={handleRemove}
        onResetButtonClick={handleReset}
        counterRemove={counterRemove}
      />
    </div>

  );
};

export default CounterOfCountersContainer;
