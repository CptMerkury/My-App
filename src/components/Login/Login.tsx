import classes from "./Login.module.css"
import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {InputBase, LoginInput, PasswordInput} from "../common/input/input";
import {required} from "../../utils/validators/validator";
import {signInThunkCreator} from "../../store/thunk/auth/authThunk";
import {AppStateType} from "../../store/store";

type LoginFormOwnProps = {
    captchaImg: string | null
}
type MapStatePropsType = {
    isAuth: boolean
    captcha: string | null
}
type MapDispatchPropsType = {
    signInThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
}
type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    const {handleSubmit, pristine, submitting, reset, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.login}>
                <Field component={LoginInput}
                       name='email'
                       validate={[required]}
                />
            </div>
            <div className={classes.password}>
                <Field component={PasswordInput}
                       name='password'
                       validate={[required]}/>
            </div>
            <div className={classes.checkbox}>
                <Field component='input'
                       name='rememberMe'
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
            </div>
            {props.captchaImg
                ? <div className={classes.captcha}>
                    <img src={props.captchaImg} alt="captcha"/>
                    <Field component={InputBase}
                           name='captcha'
                           validate={[required]}/>
                </div>
                :
                null
            }
            {error ? <div className={classes.error_msg_summary}>{error}</div> : null}
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormType) => {
        props.signInThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginFormContainer}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit} captchaImg={props.captcha}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, {signInThunkCreator})(Login)