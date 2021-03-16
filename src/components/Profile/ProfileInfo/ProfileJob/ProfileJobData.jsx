import React from "react";
import classes from "../ProfileInfo.module.css";

const ProfileJob = ({profile}) => {
    return (
        <div className={classes.jobBlock}>
            {!profile.lookingForAJob
                ? <div/>
                : <div className={classes.jobDescr}>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>}
            <div className={classes.openJobStatus}>
                <p>Open for job<span>&nbsp;</span></p>
                {profile.lookingForAJob
                    ? <div className={classes.circleIndicatorActive}/>
                    : <div className={classes.circleIndicatorNot}/>}
            </div>
        </div>
    );
}

export default ProfileJob