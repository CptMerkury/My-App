import React from "react";
import classes from "./Setting.module.css"
import ProfileDataEdit from "./ProfileEdit/InfoBlockForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {saveProfileThunkCreator} from "../../store/thunk/profile/profileThunk";
import {checkLoadingSelector, getProfileSelector} from "../../store/selectors/profile/profileSelectors";
import {AppStateType} from "../../store/store";
import {ProfileType} from "../../store/types/@types";
import withAuthRedirect from "../../utils/hoc/authRedirect";

type MapStateToPropsType = {
    profile: ProfileType | null
    isLoading: boolean
}
type MapDispatchToPropsType = {
    saveProfileThunkCreator: (data: ProfileType) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Setting: React.FC<PropsType> = ({profile, isLoading,...props}) => {

    const saveProfile = (data: ProfileType) => {
        props.saveProfileThunkCreator(data)
    }

    return (
        <div className={classes.settingContainer}>
            <h2>Setting</h2>
            <ProfileDataEdit
                profile={profile}
                initialValues={profile as ProfileType}
                isLoading={isLoading}
                saveProfile={saveProfile}
            />
        </div>
    )
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: getProfileSelector(state),
    isLoading: checkLoadingSelector(state),
})


export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, any, AppStateType>(mapStateToProps, {saveProfileThunkCreator}),
    withAuthRedirect,
)(Setting)
