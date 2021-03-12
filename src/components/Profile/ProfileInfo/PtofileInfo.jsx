import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


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
                    <div className={classes.userInfoBlock}>
                        <div className={classes.aboutMe}>
                            <p className={classes.aboutMeTitle}>About me:</p>
                            <p>{profile.aboutMe || 'Not indicated'}</p>
                        </div>
                        <div className={classes.linkBlock}>
                            <a rel="noreferrer" href={!contacts ? '#' : contacts.facebook}
                               target='_blank'>Facebook</a>
                            <a rel="noreferrer" href={!contacts ? '#' : contacts.website}
                               target='_blank'>Website</a>
                            <a rel="noreferrer" href={!contacts ? '#' : contacts.vk}
                               target='_blank'>VK</a>
                            <a rel="noreferrer" href={!contacts ? '#' : contacts.twitter}
                               target='_blank'>Twitter</a>
                            <a rel="noreferrer" href={!contacts ? '#' : contacts.instagram}
                               target='_blank'>Instagram</a>
                            <a rel="noreferrer" href={!contacts ? '#' : contacts.github}
                               target='_blank'>Github</a>
                            <a rel="noreferrer" href={!contacts ? '#' : contacts.mainLink}
                               target='_blank'>mainLink</a>
                        </div>
                    </div>
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
