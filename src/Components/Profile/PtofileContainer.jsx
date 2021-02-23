import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import classes from "./Profile.module.css"
import Profile from "./Ptofile";
import {getProfileThunkCreator, getStatusThunkCreator, setStatusThunkCreator} from "../../store/thunk/profile";
import {compose} from "redux";
import {Preloader} from "../common/preloader";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 14886
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <div className={classes.profileContainer}>
                <Profile {...this.props}
                         profile={this.props.profile}
                         contacts={this.props.profile.contacts}
                         status={this.props.status}
                         updateStatus={this.props.setStatusThunkCreator}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {getProfileThunkCreator, getStatusThunkCreator, setStatusThunkCreator}),
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