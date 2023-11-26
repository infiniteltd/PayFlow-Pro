import React from 'react';
import classes from './logo.module.css';
import Logo from '../Images/logo.jpg';

const logo = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.logobar}>
                <img src={Logo} className={classes.logoImg} />
                <h1 className={classes.companyLogo}>PayFlow pro</h1>
            </div>

            <a href='/' />
        </div>
    );
};

export default logo;
