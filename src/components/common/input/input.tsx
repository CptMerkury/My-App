import React from 'react'
import classes from './input.module.css'

// export const InputLight = ({input, meta: {touched, error}, ...props}) => {
//     return (
//         <div>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {touched &&
//             ((error && <div className={classes.error_msg_light}>{error}</div>))}
//         </div>
//
//     )
// }

type ComponentProps = {
    input: JSX.Element
    meta: {
        touched: boolean
        error: string
    }
    props: React.ReactNode
}

type InputCreateType = (params: ComponentProps) => void

export const InputBase: InputCreateType = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <div>
                <input {...input} {...props}/>
            </div>
            {touched &&
            ((error && <div className={classes.error_msg}>{error}</div>))}
        </div>

    )
}

export const LoginInput: InputCreateType = ({input, meta: {touched, error}}) => {
    return (
        <div>
            <div>
                <input {...input} type='text' placeholder='Login'
                       className={(touched && error) ? classes.error_input : ''}/>
            </div>
            {touched && error && <span className={classes.error_msg}>{error}</span>}
        </div>

    )
}

export const PasswordInput: InputCreateType = ({input, meta: {touched, error}}) => {
    return (
        <div>
            <div>
                <input {...input} type='password' placeholder='Password'
                       className={(touched && error) ? classes.error_input : ''}/>
            </div>
            {touched && error && <span className={classes.error_msg}>{error}</span>}
        </div>

    )
}
