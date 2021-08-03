import React from "react";
import { Link } from "react-router-dom";

import navitems from "./config/navitems";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.buttonsWrapper}>
      {navitems.map(({ title, path }) => (
        <Link to={path} key={path}>
          <button>{title}</button>
        </Link>
      ))}
    </div>
  );
};

export default Header;
