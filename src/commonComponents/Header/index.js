import React from 'react';
import {ROUTES} from "../../routes/routeNames";
import {Link} from "react-router-dom";

import styles from './style.module.scss';


const Header = () => {
  return (
    <>
      <div className={styles.buttonsWrapper}>
        {Object.entries(ROUTES).map(([routeNames, path]) => (
          <Link to={path} key={path}>
            <button>{routeNames}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
