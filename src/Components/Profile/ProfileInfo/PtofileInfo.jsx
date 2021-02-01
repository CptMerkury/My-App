import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.head}>
            </div>
            <div className={classes.descriptionBlock}>
                <img
                    src='https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'
                    alt="ava"/>
            </div>
        </div>
    );
}

export default ProfileInfo