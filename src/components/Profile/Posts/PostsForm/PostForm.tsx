import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/textarea/textarea";
import {maxLength, minValue, required, ValidateTypes} from "../../../../utils/validators/validator";

const maxLength200: ValidateTypes = maxLength(200)
const minValue1: ValidateTypes = minValue(1)

type PostFormType = {
    body: string
}

const PostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    const {handleSubmit, reset} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='body'
                       type='text'
                       placeholder='Add new post'
                       validate={[required, maxLength200, minValue1]}
                />
            </div>
            <div>
                <button onClick={() => setTimeout(reset, 0)}>Send message</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm<PostFormType>({
    form: 'post',
})(PostForm)

export default PostReduxForm