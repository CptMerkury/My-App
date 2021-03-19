import React from "react";
import classes from "./Setting.module.css"
import ProfileDataEdit from "./ProfileEdit/InfoBlockForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {saveProfileThunkCreator} from "../../store/thunk/profile/profileThunk";
import {checkLoadingSelector, getProfileSelector} from "../../store/selectors/profile/profileSelectors";

const Setting = ({...props}) => {
    const saveProfile = (data) => {
        props.saveProfileThunkCreator(data)
    }
    return (
        <div className={classes.settingContainer}>
            <h2>Setting</h2>
            <ProfileDataEdit
                profile={props.profile}
                isLoading={props.isLoading}
                saveProfile={saveProfile}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    isLoading: checkLoadingSelector(state),
})


export default compose(connect(mapStateToProps, {saveProfileThunkCreator}))(Setting)