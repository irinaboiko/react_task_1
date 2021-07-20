import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from "../../../../routes/routeNames";
import styles from './style.module.scss';

const HomePageLayout = () => {
    return (
        <div>
            <div className={styles.buttonsWrapper}>
                {Object.entries(ROUTES).map(([routeNames, path]) => (
                    <Link to={path} key={path}>
                        <button>{routeNames}</button>
                    </Link>
                ))}
            </div>
            <div>
                <h1>Home Page</h1>
            </div>
        </div>

    );
};

export default HomePageLayout;
