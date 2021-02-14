import React from "react";
import classes from "./Profile.module.css"
import Profile from "./Ptofile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, setProfileData} from "../../store/api-profile/profileReducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 14886
        }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => this.props.setProfileData(response.data))

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`)
            .then(response => this.props.getStatus(response.data))

    }

    render() {
        console.log(this.props)
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

const ProfileWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setProfileData,
    getStatus,
})(ProfileWithUrlData)