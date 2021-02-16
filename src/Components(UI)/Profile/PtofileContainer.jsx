import React from "react";
import classes from "./Profile.module.css"
import Profile from "./Ptofile";
import {connect} from "react-redux";
import {getStatus, setProfileData} from "../../store(BLL)/reducers/profile/profileReducer";
import {withRouter} from "react-router";
import {profileAPI} from "../../api(DAL)/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 14886
        }

        profileAPI.getProfile(userId)
            .then(data => this.props.setProfileData(data))

        profileAPI.getStatusProfile(userId)
            .then(data => this.props.getStatus(data))

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
    setProfileData,
    getStatus,
})(ProfileWithUrlData)