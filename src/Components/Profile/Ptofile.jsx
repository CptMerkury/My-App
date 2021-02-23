import React from "react";
import ProfileInfo from "./ProfileInfo/PtofileInfo";
import classes from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profileContainer}>
            <ProfileInfo profile={props.profile} contacts={props.contacts} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile