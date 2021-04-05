import React from 'react'

type ComponentProps = {
    input: JSX.Element
    meta: {
        touched: boolean
        error: string
    }
    props: React.ReactNode
}
type TextAreaCreateType = (params: ComponentProps) => void

export const Textarea:TextAreaCreateType = ({input, meta: {touched, error}, ...props}) => {
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
