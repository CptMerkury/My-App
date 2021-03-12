import {profileAPI} from "../../../api/api";
import {getStatus, setPhotoSuccess, setProfileData, toggleFetch} from "../../reducers/profile/profileReducer";

export const getProfileThunkCreator = (id) => async (dispatch) => {
    let dataProfile = await profileAPI.getProfile(id)
    dispatch(setProfileData(dataProfile))

    let dataStatus = await profileAPI.getStatusProfile(id)
    dispatch(getStatus(dataStatus))
}

export const setStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.setStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(getStatus(status))
    }
}
export const saveNewPhotoThunkCreator = (file) => async (dispatch) => {
    dispatch(toggleFetch(true))
    let response = await profileAPI.savePhoto(file)

    if (response.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.photos))
        dispatch(toggleFetch(false))
    }
}