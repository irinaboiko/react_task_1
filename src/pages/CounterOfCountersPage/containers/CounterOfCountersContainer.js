import React, {useCallback, useMemo, useState} from 'react';

import CounterOfCountersLayout from "../components/CounterOfCountersLayout";

const CounterOfCountersContainer = () => {
  const [countersList, setCountersList] = useState([]);

  const handleIncrement = useCallback((index) => {
    const countersListCopy = [...countersList];
    countersListCopy[index].countValue = countersListCopy[index].countValue + 1;
    setCountersList(countersListCopy);
  }, [countersList]);

  const handleDecrement = useCallback((index) => {
    if (countersList[index].countValue > 0) {
      const countersListCopy = [...countersList];
      countersListCopy[index].countValue = countersListCopy[index].countValue - 1;
      setCountersList(countersListCopy);
    }
  }, [countersList]);

  const handleReset = useCallback((index) => {
    const countersListCopy = [...countersList];
    countersListCopy[index].countValue = 0;
    setCountersList(countersListCopy);
  }, [countersList]);

  const parityType = useMemo(() => {
    return countersList.countValue % 2 ? 'odd' : 'even';
  }, [countersList.countValue]);

  const handleAdd = useCallback(() => {
    const countersListCopy = [...countersList];
    countersListCopy.map((counter) => {
      if (!(counter.countValue % 2)) {
        counter.countValue = counter.countValue + 1;
      }
    })
    countersListCopy.push({
      countValue: 0
    });
    setCountersList(countersListCopy);
  }, [countersList]);

  const handleRemove = useCallback(() => {
    const countersListCopy = [...countersList];
    countersListCopy.pop();
    countersListCopy.map((counter) => {
      if (counter.countValue % 2) {
        counter.countValue = counter.countValue - 1;
      }
    })
    setCountersList(countersListCopy);
  }, [countersList]);

  const handleResetCounters = useCallback(() => {
    setCountersList([]);
  }, [countersList]);

  return (
    <div>
      <CounterOfCountersLayout
        countersList={countersList}
        onAddButtonClick={handleAdd}
        onRemoveButtonClick={handleRemove}
        onResetButtonClick={handleResetCounters}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        parityType={parityType}
      />
    </div>

  );
};

export default CounterOfCountersContainer;
