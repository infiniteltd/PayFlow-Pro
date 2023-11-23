import React, { Fragment } from 'react';
import { Form } from 'react-router-dom';
import classes from './signupForm.module.css';
import Logo from '../utilities/logo';

const signupForm = () => {
    return (
        <Fragment>
            <Logo />
            <div>
                <h2>Sign Up</h2>
            </div>
            <Form>
                <label htmlFor='email'>Email Address</label>
                <input type='text' id='email' />

                <label htmlFor='bvn'>BVN</label>
                <input type='text' id='bvn' />

                <label htmlFor='number'>Phone Number</label>
                <input type='text' id='number' />

                <label htmlFor='password'>Password</label>
                <input type='text' id='password' />
                <i className='fa-solid' fa-eye id='eye'></i>
            </Form>
            <div className={classes.agree}>
                <input type="checkbox" id='check' />
                <h4>By checking this box, you agree to our <span><a href=''>privacy policy</a></span> and <span><a>Terms and Conditions</a></span>.</h4>
            </div>
            <button>Next</button>
        </Fragment>

    );
};

export default signupForm;