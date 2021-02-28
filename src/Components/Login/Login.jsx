import React from 'react'
import classes from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {signInThunkCreator} from "../../store/thunk/auth";
import {Redirect} from "react-router-dom";
import {LoginInput, PasswordInput} from "../common/input/input";


const LoginForm = (props) => {
    const {handleSubmit, pristine, submitting, reset, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={LoginInput}
                    name={'email'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field component={PasswordInput}
                       name={'password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field
                    component={'input'}
                    name={'rememberMe'}
                    type="checkbox"
                />Remember me
            </div>
            {error ? <div className={classes.error_msg_summary}>{error}</div> : null}
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
    form: 'login',
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.signInThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={classes.loginContainer}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {signInThunkCreator})(Login)