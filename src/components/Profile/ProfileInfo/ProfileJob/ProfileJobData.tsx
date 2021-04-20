import React from "react";
import classes from "../ProfileInfo.module.css";
import {ProfileType} from "../../../../store/types/@types";

type PropsType = {
    profile: ProfileType | null
}

const ProfileJob: React.FC<PropsType> = ({profile}) => {
    return (
        <div className={classes.jobBlock}>
            {profile && profile.lookingForAJob
                ? <div className={classes.jobDescr}>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>
                : <div/>}
            <div className={classes.openJobStatus}>
                <p>Open for job<span>&nbsp;</span></p>
                {profile && profile.lookingForAJob
                    ? <div className={classes.circleIndicatorActive}/>
                    : <div className={classes.circleIndicatorNot}/>}
            </div>
        </div>
    );
}

export default ProfileJob