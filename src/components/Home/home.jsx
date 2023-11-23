import React, { Fragment } from 'react';
import classes from './home.module.css';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

import RealTime from '../Images/pana.jpg';
import Engage from '../Images/rafiki2.jpg';
import BoardImg from '../Images/Subtract.jpg';
import TakeControl from '../Images/takeControl.jpg';
import ManageClients from '../Images/manageClients.jpg';
import Track from '../Images/track.jpg';
import Button from '../utilities/loginBtn';


function home() {
    return (
        <Fragment>
            <div className={classes.board}>
                <div className={classes.intro}>
                    <h1>Engage with <br></br> your clients and <br></br> Make Business Easier</h1>
                    <Button />
                </div>
                <img src={BoardImg} className={classes.boardImg} />
            </div>

            <div className={classes.slider}>
                <div className={classes.sliderImg1}>
                    <img src={TakeControl} className={classes.control} />
                    <h2>Take control of your finances</h2>
                </div>
                <div className={classes.sliderImg2}>
                    <img src={ManageClients} className={classes.clients} />
                    <h2>Manage your clients</h2>
                </div>
                <div className={classes.sliderImg3}>
                    <img src={Track} className={classes.track} />
                    <h2>Track your performance</h2>
                </div>
            </div>

            <div className={classes.realTime}>
                <img src={RealTime} className={classes.realtimeImg} />
                <h2>Manage real-time data</h2>
            </div>

            <div className={classes.engage}>
                <h2>Engage with clients</h2>
                <img src={Engage} className={classes.engageImg} />
            </div>

            {/* <div className={classes.signUp}>
                <button className={classes.signupBtn}>Get Started</button>
                <h3>Already have an account?</h3>
                <button className={classes.loginBtn}>Log In</button>
            </div> */}
        </Fragment>
    );
}

export default home

