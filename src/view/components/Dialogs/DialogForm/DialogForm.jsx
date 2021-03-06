import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/textarea/textarea";
import {maxLength, minValue, required} from "../../../../utils/validators/validator";

const maxLength200 = maxLength(200)
const minValue1 = minValue(1)

const DialogForm = (props) => {
    const {handleSubmit, reset} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'body'}
                       type='text'
                       placeholder={'Write your new message'}
                       validate={[required, maxLength200, minValue1]}
                />
            </div>
            <div>
                <button onClick={() => setTimeout(reset, 0)}>Send message</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogForm)

export default DialogReduxForm