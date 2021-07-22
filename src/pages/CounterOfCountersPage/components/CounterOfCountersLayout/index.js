import React from 'react';
import PropTypes, {number} from 'prop-types';
import {v4 as uuid4} from 'uuid';

import FunctionalCounterContainer from "../../../FunctionalCounterPage/containers/FunctionalCounterContainer";
import CounterView from "../../../../commonComponents/CounterView";

import styles from './style.module.scss';

const CounterOfCountersLayout = ({countersList, onAddButtonClick, onRemoveButtonClick, onResetButtonClick, counterRemove}) => {
  //console.log('paint');

  return (
    <div>
      {countersList.map((counter, index) => {
        return (
          <div className={styles.counterWrapper} key={uuid4()}>
            <div>{index}</div>
            <CounterView
              countValue={counter.countValue}
            />
            <button onClick={() => counterRemove(index)}>Remove Counter</button>
          </div>
        )
      })}
      <div className={styles.buttonsWrapper}>
        <button onClick={onAddButtonClick} className={styles.button}>Add Counter</button>
        <button onClick={onResetButtonClick} className={styles.button}>Reset</button>
        <button onClick={onRemoveButtonClick} className={styles.button}>
          Remove Counter
        </button>
      </div>
    </div>
  )
}

CounterOfCountersLayout.propTypes = {
  countersList: PropTypes.arrayOf(
    PropTypes.shape({
      countValue: PropTypes.number.isRequired
  }))
};

export default React.memo(CounterOfCountersLayout);
