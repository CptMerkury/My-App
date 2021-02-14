import React from "react";
import classes from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader";


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.head}>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.mediaBlock}>
                    <div className={classes.photosBlock}>
                        {!props.profile.photos ?
                            <Preloader/> :
                            <img src={!props.profile.photos.large ?
                                'https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg' :
                                props.profile.photos.large} alt="ava"/>}
                    </div>
                    <div className={classes.statusBlock}>
                        <div className={classes.statusDescr}>
                            <h3>... {!props.status ? 'Not indicated' : props.status}</h3>
                        </div>
                        <div className={classes.bubble2}/>
                        <div className={classes.bubble1}/>
                    </div>
                </div>

                <div className={classes.infoBlock}>
                    <div className={classes.nameBlock}>
                        <h4>{props.profile.fullName}</h4>
                    </div>
                    <div className={classes.userInfoBlock}>
                        <div className={classes.aboutMe}>
                            <p className={classes.aboutMeTitle}>About me:</p>
                            <p>{!props.profile.aboutMe ? 'Not indicated' : props.profile.aboutMe}</p>
                        </div>
                        <div className={classes.linkBlock}>
                            <a href={!props.contacts ? '#' : props.contacts.facebook}>Facebook</a>
                            <a href={!props.contacts ? '#' : props.contacts.website}>Website</a>
                            <a href={!props.contacts ? '#' : props.contacts.vk}>VK</a>
                            <a href={!props.contacts ? '#' : props.contacts.twitter}>Twitter</a>
                            <a href={!props.contacts ? '#' : props.contacts.instagram}>Instagram</a>
                            <a href={!props.contacts ? '#' : props.contacts.github}>Github</a>
                            <a href={!props.contacts ? '#' : props.contacts.mainLink}>mainLink</a>
                        </div>
                    </div>
                    <div className={classes.jobBlock}>
                        <div className={classes.jobDescr}>
                            <div>{!props.profile.lookingForAJobDescription ?
                                'Not indicated' :
                                props.profile.lookingForAJobDescription}</div>
                        </div>
                        <div className={classes.openJobStatus}>
                            <p>Open for job :<span>&nbsp;&nbsp;</span></p>
                            {props.profile.lookingForAJob ?
                                <div className={classes.circleIndicatorActive}/> :
                                <div className={classes.circleIndicatorNot}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo

//'https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40597/optimized_large_thumb_stage.jpg'
