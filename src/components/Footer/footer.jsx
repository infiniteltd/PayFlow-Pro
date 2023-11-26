import React, { Fragment } from 'react';
import Logo from '../Images/logo.jpg';
import classes from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Frame from '../Images/Frame.png';



const footer = () => {
    return (
        <Fragment>
            <div className={classes.contact}>
                <div className={classes.contactUs}>
                    <h2>Contact Us</h2>

                    <p><span>Are you interested in working with us or just want <br></br> to ask questions?</span></p>

                    <p className={classes.email}><FontAwesomeIcon icon={faEnvelope} className={classes.mailIcon} /><span>payflowprosstp@gmail.com</span></p>

                    <p className={classes.phone}><FontAwesomeIcon icon={faPhone} className={classes.phoneIcon} /><span>+1 916 619 0189</span></p>
                </div>
                <img src={Frame} className={classes.contactImg} />
            </div>
        </Fragment>
    );
};

export default footer;
