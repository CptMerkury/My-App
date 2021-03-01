import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";

import classes from "./Profile.module.css"
import Profile from "./Ptofile";
import {getProfileThunkCreator, setStatusThunkCreator} from "../../store/thunk/profile";
import withAuthRedirect from "../../HOC/authRedirect";
import {
    checkAuthSelector,
    getProfileSelector,
    getStatusSelector,
    getUserIdSelector
} from "../../store/reducers_selectors/profile/profileSelectors";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
           userId = this.props.authUserID
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return (
            <div className={classes.profileContainer}>
                <Profile {...this.props}
                         contacts={this.props.profile.contacts}
                         updateStatus={this.props.setStatusThunkCreator}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    authUserID: getUserIdSelector(state),
    isAuth: checkAuthSelector(state)
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getProfileThunkCreator, setStatusThunkCreator}),
    withRouter,
)(ProfileContainer)

// Вызов всех эти обработчиков ниже мы заменили на одну функцию compose выше
//
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