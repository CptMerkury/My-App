import {Field, reduxForm} from "redux-form";
import {maxLength, minValue, required} from "../../utils/validators/validator";
import {Textarea} from "../common/textarea/textarea";

const maxLength200 = maxLength(200)
const minValue1 = minValue(1)

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'body'}
                       type='text'
                       placeholder={'Write your new message'}
                       validate={[required, maxLength200, minValue1]}
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