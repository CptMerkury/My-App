import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'body'}
                       type='text'
                       placeholder={'Add your new post'}
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

const PostField = (props) => {
    const onSubmit = (formData) => {
        props.setText(formData.body)
        props.addPost()
        formData.body = ''
    }
    return <PostReduxForm onSubmit={onSubmit}/>
}
export default PostField