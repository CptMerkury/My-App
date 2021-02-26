import {Field, reduxForm} from "redux-form";

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'body'}
                       type='text'
                       placeholder={'Write your new message'}
                />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogForm)

const DialogField = (props) => {
    const onSubmit = (formData) => {
        props.setText(formData.body)
        props.addMessage()
        formData.body = ''
    }
    return <DialogReduxForm onSubmit={onSubmit}/>
}
export default DialogField