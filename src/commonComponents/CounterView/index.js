import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";

import styles from "./style.module.scss";

const CounterView = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  const isValueEven = useMemo(() => countValue % 2 === 0, [countValue]);
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
          {!isValueEven ? (
            <div className={styles.odd}>Введено нечетное число</div>
          ) : (
            <div className={styles.even}>Введено четное число</div>
          )}
        </div>
        <div className={styles.buttonsWrapper}>
          <button
            onClick={handleDecrement}
            className={`${styles.button} ${styles.btnAction}`}
          >
            -
          </button>
          <button
            onClick={handleReset}
            className={`${styles.button} ${styles.btnReset}`}
          >
            Reset
          </button>
          <button
            onClick={handleIncrement}
            className={`${styles.button} ${styles.btnAction}`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default React.memo(CounterView);
