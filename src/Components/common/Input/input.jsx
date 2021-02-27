import React from 'react'

export const Input = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <div>
                <input {...input} {...props} />
            </div>
            {touched &&
            ((error && <div style={{color: 'ghostwhite', padding: '1px 5px'}}>{error}</div>))}
        </div>

    )
}
