import CounterView from "../../../commonComponents/CounterView";
import { useCounter } from "../../../hooks";

const FunctionalCounterContainer = () => {
  const [countValue, handleIncrement, handleDecrement, handleReset] =
    useCounter(0);

  return (
    <CounterView
      countValue={countValue}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
