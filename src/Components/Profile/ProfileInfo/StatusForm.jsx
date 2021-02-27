import {Field, reduxForm} from "redux-form";
import classes from "./ProfileInfo.module.css";
import React from "react";
import {maxLength, minLength, required} from "../../../utils/validators/validator";

const maxLength50 = maxLength(50)
const maxLength1 = minLength(1)

const StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.statusDescr}>
                <div>
                    <Field component={'input'}
                           name={'body'}
                           type='text'
                           autoFocus={true}
                           placeholder={'Change status'}
                           validate={[required, maxLength50, maxLength1]}
                    />
                </div>
                <div>
                    <button type='submit' className={classes.changeStatusBtn}>Change</button>
                    <button type='button' className={classes.cancelStatusBtn} onClick={props.offEdit}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

const StatusReduxForm = reduxForm({
    form: 'status'
})(StatusForm)

export default StatusReduxForm