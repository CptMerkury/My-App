import React from "react";
import style from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <>
            <div className={style.head}>
            </div>
            <div className={style.avatarBlock}>
                <img
                    src='https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'
                    alt=""/>
            </div>
        </>
    );
}

export default ProfileInfo