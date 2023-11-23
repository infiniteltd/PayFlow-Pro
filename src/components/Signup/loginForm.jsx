import React, { Fragment } from 'react';
import Logo from '../utilities/logo';
import { Form } from 'react-router-dom';

const loginForm = () => {
    return (
        <Fragment>

            <Logo />
            <Form>
                <label htmlFor='email'>Email Address</label>
                <input type='text' id='email' />
                <label htmlFor='password'>Password</label>
                <input type='text' id='email' />
                <></>
            </Form>
        </Fragment>
    );
};

export default loginForm;