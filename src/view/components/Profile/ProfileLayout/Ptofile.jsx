import React from "react";
import ProfileInfo from "../ProfileInfo/PtofileInfo";
import classes from "../Profile.module.css"
import PostsContainer from "../Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profileContainer}>
            <ProfileInfo profile={props.profile} contacts={props.contacts} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile