import classes from "./Profile.module.css"
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";

import Profile from "./ProfileLayout/Ptofile";
import withAuthRedirect from "../../utils/hoc/authRedirect";
import {
    getProfileThunkCreator, saveNewPhotoThunkCreator,
    setStatusThunkCreator
} from "../../store/thunk/profile/profileThunk";
import {
    checkAuthSelector, checkLoadingSelector, getProfileSelector,
    getStatusSelector, getUserIdSelector
} from "../../store/selectors/profile/profileSelectors";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserID
        }
        this.props.getProfileThunkCreator(userId)
    }

    checkOwner(){
        return (this.props.match.params.userId === this.props.authUserID) || this.props.match.params.userId === undefined;
    }

    componentDidMount() {
        this.refreshProfile()
        this.checkOwner()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
            this.checkOwner()
        }
    }

    render() {
        return (
            <div className={classes.profileContainer}>
                <Profile {...this.props}
                        isOwner={this.checkOwner()}
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
    isLoading: checkLoadingSelector(state)
})

export default compose(
    connect(mapStateToProps, {getProfileThunkCreator, setStatusThunkCreator, saveNewPhotoThunkCreator}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)

// Вызов всех эти обработчиков ниже мы заменили на одну функцию compose выше

// const withAuth = withAuthRedirect(ProfileContainer)
//
// // Используем withRouter чтобы обернуть контейнерную компоненту
// // в другую контейнерную компоненту и передать в нее данные состояния uri
// const ProfileWithUrlData = withRouter(withAuth)
//
// export default connect(mapStateToProps, {
//     getProfileThunkCreator,
//     getStatusThunkCreator,
// })(ProfileWithUrlData)