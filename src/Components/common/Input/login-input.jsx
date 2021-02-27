import React from 'react'

export const LoginInput = ({ input, meta: { touched, error } }) => {
    return (
        <div>
            <div>
                <input {...input} />
            </div>
            {touched && error && <span style={{color: 'crimson', padding: '1px 2px'}}>{error}</span>}
        </div>

    )
}
