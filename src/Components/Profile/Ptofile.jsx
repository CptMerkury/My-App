import React from "react";
import ProfileInfo from "./ProfileInfo/PtofileInfo";
import classes from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileComp = (props) => {
    return (
        <div className={classes.profileContainer}>
            <ProfileInfo/>
            <MyPostsContainer
                posts={props.dataPosts.posts}
                newPostText={props.dataPosts.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default ProfileComp