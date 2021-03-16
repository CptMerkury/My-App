import {profileAPI} from "../../../api/api";
import {
    getStatus,
    setPhotoSuccess,
    setProfileData,
    toggleFetch,
    toggleFetchStatus
} from "../../reducers/profile/profileReducer";

export const getProfileThunkCreator = (id) => async (dispatch) => {
    dispatch(toggleFetch(true))
    let dataProfile = await profileAPI.getProfile(id)
    dispatch(setProfileData(dataProfile))
    dispatch(toggleFetch(false))
}

export const getStatusThunkCreator = (id) => async (dispatch) => {
    dispatch(toggleFetchStatus(true))
    let dataStatus = await profileAPI.getStatusProfile(id)
    dispatch(getStatus(dataStatus))
    dispatch(toggleFetchStatus(false))
}

export const setStatusThunkCreator = (status) => async (dispatch) => {
    dispatch(toggleFetchStatus(true))
    let response = await profileAPI.setStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(getStatus(status))
        dispatch(toggleFetchStatus(false))
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

export const saveProfileThunkCreator = (data) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    dispatch(toggleFetch(true))
    let response = await profileAPI.saveProfile(data)
    if (response.resultCode === 0) {
        dispatch(getProfileThunkCreator(userId))
        dispatch(toggleFetch(false))
    }
}