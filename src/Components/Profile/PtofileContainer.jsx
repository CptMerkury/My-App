import React from "react";
import classes from "./Profile.module.css"
import Profile from "./Ptofile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getProfileThunkCreator, getStatusThunkCreator} from "../../store/thunk/profile";

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
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})
// Используем withRouter чтобы обернуть контейнерную компоненту
// в другую контейнерную компоненту и передать в нее данные состояния uri
const ProfileWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getProfileThunkCreator,
    getStatusThunkCreator,
})(ProfileWithUrlData)