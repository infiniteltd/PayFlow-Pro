import React, { Fragment } from 'react';
import classes from './home.module.css';

import Icon from '../Images/cib-adguard.svg';
import Engage from '../Images/rafiki-new2.jpg';
import BoardImg from '../Images/pana.jpg';
import TakeControl from '../Images/rafiki-new.jpg';
import ManageClients from '../Images/rafiki2.jpg';
import Group from '../Images/Group.png';

import Button from '../utilities/button';



function home() {
    return (
        <Fragment>
            <div className={classes.board}>
                <div className={classes.intro}>
                    <h1>The Better Way To <br></br> Manage Business</h1>
                    <p><span>Create and generate invoice for your client and track your <br></br> productivity</span></p>

                    <button className={classes.btn}>Create an Account</button>

                </div>
                <img src={BoardImg} className={classes.boardImg} />
            </div>

            {/* <div className={classes.line}></div> */}

            <div className={classes.subIntro}>

                <h2><img src={Icon} /> Build your business in 3 steps</h2>

                <div><span>PayFlow Pro is a platform where you can manage your business activity, track your <br></br> productivity, create a page for your client and generate invoice for your payment</span></div>
                <button><a href=''>Learn more</a></button>
            </div>

            <div className={classes.takeControl}>
                <div>
                    <h2>Take Control of Your Finance</h2>
                    <span>Keep track of all your business <br></br> transactions made by clients.</span>
                    <Button />
                </div>
                <img src={TakeControl} className={classes.takeControlImg} />
            </div>

            <div className={classes.manageClient}>
                <img src={ManageClients} className={classes.manageClientImg} />

                <div className={classes.manageClientInfo}>

                    <h2>Manage your client</h2>
                    <span>Create a profile for your clients, control <br></br> payments, and receive real-time alert <br></br> of unpaid invoices.</span>
                    <Button />
                </div>

            </div>

            <div className={classes.engage}>
                <div className={classes.engageInfo}>

                    <h2>Track your productivity</h2>
                    <span>Get to know your performance, build a <br></br> future where consistency is not a <br></br> choice but discipline.</span>
                    <Button />
                </div>

                <img src={Engage} className={classes.engageImg} />
            </div>

            <div className={classes.why}>
                <img src={Group} className={classes.whyImg} />
                <div className={classes.whyus}>
                    <h2>Why Choose Us?</h2>

                    <p><span>PayFlow Pro gives you the ability to <br></br> manage your client, trace unpaid <br></br> services, get to know how well you <br></br> perform and also keep track of your <br></br> finance.</span></p>
                </div>

            </div>



        </Fragment>
    );
}

export default home;


{/* <div className={classes.slider}>
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
</div> */}