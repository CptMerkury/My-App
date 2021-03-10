import classes from "./Login.module.css"
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {LoginInput, PasswordInput} from "../common/input/input";
import {required} from "../../utils/validators/validator";
import {signInThunkCreator} from "../../store/thunk/auth/authThunk";

const LoginForm = (props) => {
    const {handleSubmit, pristine, submitting, reset, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.login}>
                <Field component={LoginInput}
                       name={'email'}
                       validate={[required]}
                />
            </div>
            <div className={classes.password}>
                <Field component={PasswordInput}
                       name={'password'}
                       validate={[required]}/>
            </div>
            <div className={classes.checkbox}>
                <Field component={'input'}
                       name={'rememberMe'}
                       type="checkbox"/>Remember me
            </div>
            <div className={classes.btnBlock}>
                <button type="submit"
                        disabled={submitting}
                        className={classes.submitBtn}>Submit
                </button>
                <button type="button"
                        disabled={pristine || submitting} onClick={reset}
                        className={classes.cancelBtn}>Clear Values
                </button>
                {error ? <div className={classes.error_msg_summary}>{error}</div> : null}
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
            <div className={classes.loginFormContainer}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {signInThunkCreator})(Login)