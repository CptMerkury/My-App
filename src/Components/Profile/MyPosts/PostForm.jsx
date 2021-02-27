import {Field, reduxForm} from "redux-form";
import {maxLength, minLength} from "../../../utils/validators/validator";
import {Textarea} from "../../common/textarea";

const maxLength200 = maxLength(200)
const minLength2 = minLength(2)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'body'}
                       type='text'
                       placeholder={'Add your new post'}
                       validate={[maxLength200,minLength2]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)

export default PostReduxForm