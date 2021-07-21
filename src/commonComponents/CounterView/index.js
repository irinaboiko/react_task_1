import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/routeNames";

import styles from './style.module.scss';

const CounterView = ({countValue, parityType, handleIncrement, handleDecrement, resetCounter}) => {
  return (
    <div>
      <div>
        <Link to={ROUTES.HOME_PAGE}>
          <button className={styles.linkButton}>HOME_PAGE</button>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.display}>{countValue}</div>
        <div className={styles.display}>
          {/*{
            parityType === 'even'
              ? <div className={styles.even}>Введено четное число</div>
              : <div className={styles.odd}>Введено нечетное число</div>
          }*/
            countValue % 2
              ? <div className={styles.odd}>Введено нечетное число</div>
              : <div className={styles.even}>Введено четное число</div>
          }
        </div>
        <div className={styles.buttonsWrapper}>
          <button onClick={handleDecrement} className={`${styles.button} ${styles.btnAction}`}>-</button>
          <button onClick={resetCounter} className={`${styles.button} ${styles.btnReset}`}>Reset</button>
          <button onClick={handleIncrement} className={`${styles.button} ${styles.btnAction}`}>+</button>
        </div>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityType: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
};

export default CounterView;
