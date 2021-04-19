import React from 'react';
import {Route} from "react-router-dom";
import './auth.scss';
import {LoginForm, RegistrationForm} from 'Modules';


const Auth = () => {
    return (
        <section className='auth'>
            <div className='auth__content'>
                <Route exact path={["/", "/login"]} component={LoginForm}/>
                <Route exact path='/registration' component={RegistrationForm}/>
            </div>
        </section>
    )
};

export default Auth;
