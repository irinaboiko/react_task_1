import React, { useCallback, useState } from "react";

import CounterOfCountersLayout from "../components/CounterOfCountersLayout";

const CounterOfCountersContainer = () => {
  const [countersList, setCountersList] = useState([]);

  const handleIncrement = useCallback(
    (index) => {
      const countersListCopy = [...countersList];

      countersListCopy[index].countValue =
        countersListCopy[index].countValue + 1;
      setCountersList(countersListCopy);
    },
    [countersList]
  );

  const handleDecrement = useCallback(
    (index) => {
      if (countersList[index].countValue > 0) {
        const countersListCopy = [...countersList];

        countersListCopy[index].countValue =
          countersListCopy[index].countValue - 1;
        setCountersList(countersListCopy);
      }
    },
    [countersList]
  );

  const handleReset = useCallback(
    (index) => {
      const countersListCopy = [...countersList];

      countersListCopy[index].countValue = 0;
      setCountersList(countersListCopy);
    },
    [countersList]
  );

  const handleAdd = useCallback(() => {
    const updatedCounters = countersList.map(({ countValue }) => {
      return {
        countValue: countValue % 2 === 0 ? countValue + 1 : countValue,
      };
    });

    setCountersList([...updatedCounters, { countValue: 0 }]);
  }, [countersList]);

  const handleRemove = useCallback(() => {
    const updatedCounters = countersList.map(({ countValue }) => {
      return {
        countValue: countValue % 2 ? countValue - 1 : countValue,
      };
    });
    updatedCounters.pop();

    setCountersList(updatedCounters);
  }, [countersList]);

  const handleResetCounters = useCallback(() => {
    setCountersList([]);
  }, [countersList]);

  return (
    <CounterOfCountersLayout
      countersList={countersList}
      onAddButtonClick={handleAdd}
      onRemoveButtonClick={handleRemove}
      onResetButtonClick={handleResetCounters}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default CounterOfCountersContainer;
