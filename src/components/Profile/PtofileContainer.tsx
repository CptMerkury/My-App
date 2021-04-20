import classes from "./Profile.module.css"
import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from "./ProfileLayout/Ptofile";
import withAuthRedirect from "../../utils/hoc/authRedirect";
import {
    getProfileThunkCreator, getStatusThunkCreator, saveNewPhotoThunkCreator,
    setStatusThunkCreator
} from "../../store/thunk/profile/profileThunk";
import {
    checkAuthSelector, checkFetchingStatusSelector, checkLoadingSelector, getProfileSelector,
    getStatusSelector, getUserIdSelector
} from "../../store/selectors/profile/profileSelectors";
import {AppStateType} from "../../store/store";

type MapStateToProps = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = {
    getProfileThunkCreator: (id: number) => void
    setStatusThunkCreator: (val: string) => void
    getStatusThunkCreator: (id: number) => void
    saveNewPhotoThunkCreator: (file: File) => void
}
type PathParams = {
    userId: string
}
type PropsType = MapStateToProps & MapDispatchToProps & RouteComponentProps<PathParams>

class ProfileContainer extends React.PureComponent<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserID
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getProfileThunkCreator(userId)
            this.props.getStatusThunkCreator(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div className={classes.profileContainer}>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         updateStatus={this.props.setStatusThunkCreator}
                         saveNewPhoto={this.props.saveNewPhotoThunkCreator}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    authUserID: getUserIdSelector(state),
    isAuth: checkAuthSelector(state),
    isLoading: checkLoadingSelector(state),
    isFetchingStatus: checkFetchingStatusSelector(state)
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileThunkCreator, setStatusThunkCreator,
        getStatusThunkCreator, saveNewPhotoThunkCreator
    }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)