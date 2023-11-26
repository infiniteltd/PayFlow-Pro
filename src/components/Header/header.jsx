import React, { Fragment } from 'react';
import classes from './header.module.css';
import Logo from '../utilities/logo';


function header() {
    return (
        <Fragment>
            <div className={classes.header}>
                <Logo />

                <li className={classes.home}>
                    <a href='/'>Home</a>
                </li>

                <li className={classes.services}>
                    <a href='/services'>Services</a>
                </li>
                <li className={classes.about}>
                    <a href='/about'>About Us</a>
                </li>

                <button className={classes.headerLogin}>Log in</button>

                <button className={classes.headerSignup}>Create an Account</button>
            </div>
            <div className={classes.line}></div>
        </Fragment>
    );
};

export default header;
