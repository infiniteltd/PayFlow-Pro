import React, { Fragment } from 'react';
import classes from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Frame from '../Images/Frame.png';



const footer = () => {
    return (
        <Fragment>
            <div className={classes.contact}>
                <div className={classes.store}>
                    <h2>Your Comfort is our priority</h2>
                    <p><span>PayFlow Pro is a platform where you can manage <br></br> your business activity, track your productivity, <br></br> create a page for your client and generate invoice <br></br> for your payment</span></p>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                        <a href='#'> Get on PlayStore</a>
                    </button>
                </div>

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
