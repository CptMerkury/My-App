import React from "react";
import ProfileInfo from "./ProfileInfo/PtofileInfo";
import classes from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileComp = (props) => {
    return (
        <div className={classes.profileContainer}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}

export default ProfileComp