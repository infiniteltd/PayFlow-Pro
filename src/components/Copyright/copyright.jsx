import React from 'react';
import classes from './copyright.module.css';

function copyright() {
    return (
        <div className={classes.copyright}>
            <p className={classes.copy}>Copyright &copy; 2023, All rights reversed. PayFlow pro </p>
        </div>
    );
}

export default copyright;
