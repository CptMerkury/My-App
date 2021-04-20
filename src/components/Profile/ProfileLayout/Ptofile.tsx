import React from "react";
import ProfileInfo from "../ProfileInfo/PtofileInfo";
import classes from "../Profile.module.css"
import PostsContainer from "../Posts/PostsContainer";
import {ProfileType} from "../../../store/types/@types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (val: string) => void
    isOwner: boolean
    saveNewPhoto: (file: File) => void
    isLoading: boolean
    isFetchingStatus: boolean
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.profileContainer}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         saveNewPhoto={props.saveNewPhoto}
                         isLoading={props.isLoading}
                         isFetchingStatus={props.isFetchingStatus}
            />
            <PostsContainer/>
        </div>

    );
}

export default Profile