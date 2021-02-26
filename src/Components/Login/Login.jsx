import React from 'react'
import classes from "./Login.module.css"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'user_login'} type='text' placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'user_password'} type='password' placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} name={'remember_me'} type="checkbox"/>Remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={classes.loginContainer}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login