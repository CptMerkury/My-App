import {profileAPI} from "../../api/api";
import {getStatus, setProfileData} from "../reducers_selectors/profile/profileReducer";

export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(data => dispatch(setProfileData(data)))
        profileAPI.getStatusProfile(id)
            .then(data => dispatch(getStatus(data)))
    }
}

export const setStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status)
            .then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(getStatus(status))
                }
            })
    }
}