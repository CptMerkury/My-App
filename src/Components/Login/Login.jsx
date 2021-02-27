import React from 'react'
import classes from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {LoginInput} from "../common/Input/login-input";


const LoginForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={LoginInput}
                    name={'user_login'}
                    type='text'
                    placeholder={'Login'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field component={LoginInput} name={'user_password'} type='password' placeholder={'Password'} validate={[required]}/>
                {error && <strong>{error}</strong>}
            </div>
            <div>
                <Field component={'input'} name={'remember_me'} type="checkbox"/>Remember me
            </div>
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
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