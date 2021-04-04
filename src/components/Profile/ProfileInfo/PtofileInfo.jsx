import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader/spinner";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileJob from "./ProfileJob/ProfileJobData";


const ProfileInfo = ({saveNewPhoto, profile, status, updateStatus, isOwner, contacts, isLoading, isFetchingStatus}) => {

    const onPhotoSelected = (e) => {
        console.log(e)
        if (e.target.files.length) {
            saveNewPhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={classes.head}>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.mediaBlock}>
                    <div className={classes.photosBlock}>
                        {!profile.photos || isLoading
                            ? <Preloader/>
                            : <img
                                src={profile.photos.large || 'https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'}
                                alt="ava"/>}
                    </div>
                    <ProfileStatus statusData={status} saveStatus={updateStatus}
                                   isOwner={isOwner} loading={isFetchingStatus}/>
                </div>

                <div className={classes.infoBlock}>
                    <div className={classes.nameBlock}>
                        {isOwner
                            ? <label className={isLoading ? classes.changePhotosDis : classes.changePhotos}>
                                <input type={'file'} onChange={onPhotoSelected} disabled={isLoading}/>
                                Change Photos
                            </label>
                            : null}
                        <h4 className={classes.user_nameBlock}>{profile.fullName}</h4>
                    </div>
                    <ProfileData profile={profile} contacts={contacts} isOwner={isOwner}/>
                    <ProfileJob profile={profile}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo

//'https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'
