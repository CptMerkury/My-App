import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, minValue, required} from "../../../utils/validators/validator";
import {InputBase} from "../../common/input/input";
import {Textarea} from "../../common/textarea/textarea";

const maxLength50 = maxLength(50)
const minValue1 = minValue(1)

const InfoBlockForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <h4>About me:</h4>
                    <Field component={Textarea}
                           name={'about_me'}
                           type='text'
                           placeholder={'Write about your'}
                           validate={[required, maxLength50, minValue1]}
                    />
                    <div>
                        <h4>Contacts:</h4>
                        <p>Facebook:</p>
                        <Field component={InputBase}
                               name={'facebook'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                        <p>Website:</p>
                        <Field component={InputBase}
                               name={'website'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                        <p>VK:</p>
                        <Field component={InputBase}
                               name={'vk'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                        <p>Twitter:</p>
                        <Field component={InputBase}
                               name={'twitter'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                        <p>Instagram:</p>
                        <Field component={InputBase}
                               name={'instagram'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                        <p>YouTube:</p>
                        <Field component={InputBase}
                               name={'youtube'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                        <p>GitHub:</p>
                        <Field component={InputBase}
                               name={'github'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                        <p>MainLink:</p>
                        <Field component={InputBase}
                               name={'mainLink'}
                               type='text'
                               placeholder={'https//'}
                               validate={[required, maxLength50, minValue1]}
                        />
                    </div>
                    <div>
                        <h4>Job information:</h4>
                        Open for job
                        <Field component={'input'}
                               name={'lookingForAJob'}
                               type="checkbox"/>
                        <p>Description for job</p>
                        <Field component={Textarea}
                               name={'lookingForAJobDescription'}
                               type='text'
                               placeholder={'Description for job'}
                               validate={[required, maxLength50, minValue1]}
                        />
                    </div>
                </div>
                <div>
                    <button type='submit'>Change</button>
                </div>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'profileDate'
})(InfoBlockForm)

export default ProfileDataReduxForm