import React from 'react'
import classes from './input.module.css'

export const Input = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <div>
                <input {...input} {...props}/>
            </div>
            {touched &&
            ((error && <div className={classes.error_msg_light}>{error}</div>))}
        </div>

    )
}

export const LoginInput = ({ input, meta: { touched, error } }) => {
    return (
        <div>
            <div>
                <input {...input} type='text' placeholder='Login' className={(touched && error) ? classes.error_input : null}/>
            </div>
            {touched && error && <span className={classes.error_msg}>{error}</span>}
        </div>

    )
}

export const PasswordInput = ({ input, meta: { touched, error } }) => {
    return (
        <div>
            <div>
                <input {...input} type='password' placeholder='Password' className={(touched && error) ? classes.error_input : null}/>
            </div>
            {touched && error && <span className={classes.error_msg}>{error}</span>}
        </div>

    )
}
