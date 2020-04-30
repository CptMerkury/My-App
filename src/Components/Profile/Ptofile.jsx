import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/PtofileInfo";


const ProfileComp = (props) => {

    return (
        <div className='profile'>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default ProfileComp