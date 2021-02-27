import {Field, reduxForm} from "redux-form";
import {maxLength, minLength} from "../../utils/validators/validator";

const maxLength200 = maxLength(200)
const minLength2 = minLength(2)

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'body'}
                       type='text'
                       placeholder={'Write your new message'}
                       validate={[maxLength200, minLength2]}
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

export default DialogReduxForm