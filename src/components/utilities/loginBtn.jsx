import React from 'react';
import classes from './loginBtn.module.css';

function loginBtn() {
    return (
        <div>
            <button className={classes.btn}>Log in</button>
        </div>
    );
}

export default loginBtn;
