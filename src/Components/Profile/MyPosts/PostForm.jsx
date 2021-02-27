import {Field, reduxForm} from "redux-form";
import {maxLength, minValue} from "../../../utils/validators/validator";
import {Textarea} from "../../common/textarea/index";

const maxLength200 = maxLength(200)
const minValue1 = minValue(1)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'body'}
                       type='text'
                       placeholder={'Add new post'}
                       validate={[ maxLength200, minValue1]}
                />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)

export default PostReduxForm