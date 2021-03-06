import React from 'react'

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    return (
        <div>
            <div>
                <textarea {...input} {...props} />
            </div>
            {touched &&
            ((error && <span style={{color: 'crimson'}}>{error}</span>))}
        </div>

    )
}
