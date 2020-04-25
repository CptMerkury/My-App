import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.head}>
                <img src='https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-night-deep-space-background-download-image_210714.jpg'/>
            </div>
            <div className={s.avatar}>
                <img src='https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'/>
            </div>
        </div>
    );
}

export default ProfileInfo