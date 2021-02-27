import {Field, reduxForm} from "redux-form";
import classes from "./ProfileInfo.module.css";
import React from "react";
import {maxLength, minLength, minValue, required} from "../../../utils/validators/validator";
import {Input} from "../../common/Input/input";

const maxLength50 = maxLength(50)
const minValue1 = minValue(1)

const StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.statusDescr}>
                <div>
                    <Field component={Input}
                           name={'body'}
                           type='text'
                           autoFocus={true}
                           placeholder={'Change status'}
                           validate={[maxLength50, minValue1]}
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