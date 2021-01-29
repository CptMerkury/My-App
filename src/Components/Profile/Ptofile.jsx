import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/PtofileInfo";
import style from "./Profile.module.css"

const ProfileComp = (props) => {
    return (
        <div className={style.profileContainer}>
            <ProfileInfo/>
            <MyPosts
                posts={props.dataPosts.posts}
                newPostText={props.dataPosts.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default ProfileComp