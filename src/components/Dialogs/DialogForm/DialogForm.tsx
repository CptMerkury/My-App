import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/textarea/textarea";
import {maxLength, minValue, required, ValidateTypes} from "../../../utils/validators/validator";

const maxLength200: ValidateTypes = maxLength(200)
const minValue1: ValidateTypes = minValue(1)

type DialogFromType = {
    body: string
}

const DialogForm: React.FC<InjectedFormProps<DialogFromType>> = (props) => {
    const {handleSubmit, reset} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='body'
                       type='text'
                       placeholder='Write your new message'
                       validate={[required, maxLength200, minValue1]}
                />
            </div>
            <div>
                <button onClick={() => setTimeout(reset, 0)}>Send message</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm<DialogFromType>({
    form: 'dialog'
})(DialogForm)

export default DialogReduxForm