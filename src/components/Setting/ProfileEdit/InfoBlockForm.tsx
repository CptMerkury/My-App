import React from 'react'
import {maxLength, minValue} from "../../../utils/validators/validator";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/textarea/textarea";
import {InputBase} from "../../common/input/input";
import {Preloader} from "../../common/preloader/spinner";
import classes from "../Setting.module.css";
import {ProfileType} from "../../../store/types/@types";

const maxLength300 = maxLength(300)
const maxLength50 = maxLength(50)
const maxLength20 = maxLength(20)
const minValue1 = minValue(1)

type ProfileFormType = {
    initialValues: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileFormType> & ProfileFormType> = (props) => {

    const {handleSubmit, submitting, error} = props
    return (
        <form onSubmit={handleSubmit} className={classes.settingsWrapper}>
            <div className={classes.form_wrapper}>
                <div className={classes.aboutMe_block}>
                    <h4>About me:</h4>
                    <Field component={Textarea}
                           name='aboutMe'
                           type='text'
                           placeholder='Write about your'
                           validate={[maxLength300, minValue1]}
                    />
                    <h4>Full Name</h4>
                    <Field component={InputBase}
                           name='fullName'
                           type='text'
                           placeholder='Full name'
                           validate={[maxLength20, minValue1]}
                    />
                    <div className={classes.btn_save}>
                        <button type="submit"
                                disabled={submitting}>Save
                        </button>
                    </div>
                </div>
                <div className={classes.job_block}>
                    <h4>Job information:</h4>
                    <Field component={Textarea}
                           name='lookingForAJobDescription'
                           type='text'
                           placeholder='Description for job'
                           validate={[maxLength50, minValue1]}
                    />
                    <span>Open for job&nbsp;</span>
                    <Field component='input'
                           name='lookingForAJob'
                           type="checkbox"/>
                    <div className={classes.btn_save}>
                        <button type="submit"
                                disabled={submitting}>Save
                        </button>
                    </div>
                </div>
                <div className={classes.contacts_block}>
                    <h4>Contacts:</h4>
                    <div className={classes.contacts_fields}>
                        <p>Facebook:</p>
                        <Field component={InputBase}
                               name='contacts.facebook'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                        <p>Website:</p>
                        <Field component={InputBase}
                               name='contacts.website'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                        <p>VK:</p>
                        <Field component={InputBase}
                               name='contacts.vk'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                        <p>Twitter:</p>
                        <Field component={InputBase}
                               name='contacts.twitter'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                        <p>Instagram:</p>
                        <Field component={InputBase}
                               name='contacts.instagram'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                        <p>YouTube:</p>
                        <Field component={InputBase}
                               name='contacts.youtube'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                        <p>GitHub:</p>
                        <Field component={InputBase}
                               name='contacts.github'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                        <p>MainLink:</p>
                        <Field component={InputBase}
                               name='contacts.mainLink'
                               type='text'
                               placeholder='https://'
                               validate={[maxLength50, minValue1]}
                        />
                    </div>
                    <div className={classes.btn_save}>
                        <button type="submit"
                                disabled={submitting}>Save
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.btn_saveAll}>
                <button type="submit"
                        disabled={submitting}>Save All
                </button>
            </div>
            {error ? <div>{error}</div> : null}
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileType, ProfileFormType>(
    {
        form: 'newProfileData',
    }
)(ProfileDataForm)

type PropsType = {
    saveProfile: (data: ProfileType) => void
    profile: ProfileType | null
    isLoading: boolean
    initialValues: ProfileType
}

const ProfileDataEdit:React.FC<PropsType> = ({saveProfile, profile, isLoading, initialValues}) => {
    /*
    * Для полей contacts мы в качестве названия используем 'contacts.Name'
    * Чтобы внутри formData, создался объект contacts. И value для этих полей отображался
    */
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
    }


    return (
        <>
            {isLoading
                ? <div className={classes.isLoading}>
                    <Preloader/>
                </div>
                : null}
            <div className={(!isLoading) ? classes.settingsField : classes.settingsFieldDis}>
                <ProfileDataReduxForm
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                />

            </div>
        </>
    )
}

export default ProfileDataEdit