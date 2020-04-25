import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/PtofileInfo";


const ProfileComp = () => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.avatar}>
                <img src='https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'/>
            </div>
            <MyPosts/>
        </div>
    );
}

export default ProfileComp