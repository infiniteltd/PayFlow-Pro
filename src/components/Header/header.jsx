import React, { Fragment } from 'react';
import classes from './header.module.css';
import Logo from '../utilities/logo';


function header() {
    return (
        <Fragment>
            <div className={classes.header}>
                <Logo />
                <ul className={classes.navbar}>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                </ul>
                <button className={classes.headerLogin}>Log in</button>
            </div>
        </Fragment>
    );
};

export default header;
