import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import classes from './button.module.css';

function button() {
    return (
        <div>
            <button className={classes.serviceBtn}>Get Started <FontAwesomeIcon icon={faGreaterThan} className={classes.greater} /></button>
        </div>
    );
}

export default button;
