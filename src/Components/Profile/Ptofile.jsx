import React from "react";
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