import React from "react";
import ProfileInfo from "./ProfileInfo/PtofileInfo";
import classes from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileComp = () => {
    return (
        <div className={classes.profileContainer}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default ProfileComp