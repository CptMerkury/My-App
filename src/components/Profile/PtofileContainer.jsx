import classes from "./Profile.module.css"
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
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

class ProfileContainer extends React.PureComponent {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserID
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div className={classes.profileContainer}>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         contacts={this.props.profile.contacts}
                         updateStatus={this.props.setStatusThunkCreator}
                         saveNewPhoto={this.props.saveNewPhotoThunkCreator}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    authUserID: getUserIdSelector(state),
    isAuth: checkAuthSelector(state),
    isLoading: checkLoadingSelector(state),
    isFetchingStatus: checkFetchingStatusSelector(state)
})

export default compose(
    connect(mapStateToProps, {
        getProfileThunkCreator, setStatusThunkCreator,
        getStatusThunkCreator, saveNewPhotoThunkCreator
    }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)

/* Вызов всех эти обработчиков ниже мы заменили на одну функцию compose выше
*
* const withAuth = withAuthRedirect(ProfileContainer)
* // Используем withRouter чтобы обернуть контейнерную компоненту
* // в другую контейнерную компоненту и передать в нее данные состояния uri
* const ProfileWithUrlData = withRouter(withAuth)
*
* export default connect(mapStateToProps, {
*     getProfileThunkCreator,
*     getStatusThunkCreator,
* })(ProfileWithUrlData)
*/