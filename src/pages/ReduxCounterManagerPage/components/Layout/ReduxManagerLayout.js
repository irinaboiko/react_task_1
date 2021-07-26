import React from "react";
import { v4 as uuid4 } from "uuid";
import CounterView from "../../../../commonComponents/CounterView";

const ReduxManagerLayout = ({
  counters,
  handleCounterCreate,
  handleCounterRemove,
  handleResetCounters,
  handleIncrement,
  handleDecrement,
  handleResetCounter,
}) => {
  return (
    <div>
      <div>
        <button onClick={handleCounterCreate}>Add counter</button>
        <button onClick={handleResetCounters}>Reset</button>
        <button onClick={handleCounterRemove}>Remove counter</button>
      </div>
      <div>
        {counters.map((counter, index) => (
          <CounterView
            key={uuid4()}
            countValue={counter.countValue}
            handleIncrement={() => handleIncrement(index)}
            handleDecrement={() => handleDecrement(index)}
            handleReset={() => handleResetCounter(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReduxManagerLayout;
