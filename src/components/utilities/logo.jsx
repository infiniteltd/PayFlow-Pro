import React from 'react';
import classes from './logo.module.css';

const logo = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.logobar}>
                <div className={classes.bar1}>
                </div>
                <div className={classes.bar2}>
                </div>
                <div className={classes.bar3}>
                </div>
            </div>

            <h1 className={classes.companyLogo}>PayFlow pro</h1>
            <a href='/' />
        </div>
    );
};

export default logo;
