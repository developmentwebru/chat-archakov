import React from 'react';
import './Auth.scss'
import LoginForm from '../../modules/LoginForm/containers/LoginForm'
import RegisterForm from '../../modules/RegisterForm/containers/RegisterForm'
import {Route} from 'react-router-dom'
const Auth = ()=> {

    return (
        <section className='auth'>
            <div className="auth__content">
                <Route exact path={['/', '/login']} component={LoginForm} />
                <Route exact path='/register' component={RegisterForm} />

            </div>
        </section>
    )
}



export default Auth;