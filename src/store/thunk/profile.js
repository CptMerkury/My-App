import {profileAPI} from "../../api/api";
import {getStatus, setProfileData} from "../reducers/profile/profileReducer";

export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(data => dispatch(setProfileData(data)))
    }
}

export const getStatusThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getStatusProfile(id)
            .then(data => dispatch(getStatus(data)))
    }
}