import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";


const ProfileInfo = ({saveNewPhoto, profile, status, updateStatus, isOwner, contacts, isLoading}) => {

    const onPhotoSelected = (e) => {
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
                    <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                </div>

                <div className={classes.infoBlock}>
                    <div className={classes.nameBlock}>
                        {isOwner
                            ? <label className={classes.changePhotos}>
                                <input type={'file'} onChange={onPhotoSelected}/>
                                Change Photos
                            </label>

                            : null}
                        <h4 className={classes.user_nameBlock}>{profile.fullName}</h4>
                    </div>
                    <ProfileData profile={profile} contacts={contacts} isOwner={isOwner}/>
                    <div className={classes.jobBlock}>
                        {!profile.lookingForAJob
                            ? <div/>
                            : <div className={classes.jobDescr}>
                                <div>{profile.lookingForAJobDescription}</div>
                            </div>}
                        <div className={classes.openJobStatus}>
                            <p>Open for job :<span>&nbsp;&nbsp;</span></p>
                            {profile.lookingForAJob
                                ? <div className={classes.circleIndicatorActive}/>
                                : <div className={classes.circleIndicatorNot}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo

//'https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'
