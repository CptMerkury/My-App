import {profileAPI} from "../../../api/api";
import {
    getStatus,
    setPhotoSuccess,
    setProfileData,
    toggleFetch,
    toggleFetchStatus
} from "../../reducers/profile/profileReducer";
import {stopSubmit} from "redux-form";
import {ProfileType} from "../../types/@types";

export const getProfileThunkCreator = (id: number) => async (dispatch: any) => {
    dispatch(toggleFetch(true))
    let dataProfile = await profileAPI.getProfile(id)
    dispatch(setProfileData(dataProfile))
    dispatch(toggleFetch(false))
}

export const getStatusThunkCreator = (id: number) => async (dispatch: any) => {
    dispatch(toggleFetchStatus(true))
    let dataStatus = await profileAPI.getStatusProfile(id)
    dispatch(getStatus(dataStatus))
    dispatch(toggleFetchStatus(false))
}

export const setStatusThunkCreator = (status: string) => async (dispatch: any) => {
    try {
        dispatch(toggleFetchStatus(true))
        let response = await profileAPI.setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(getStatus(status))
            dispatch(toggleFetchStatus(false))
        }
    } catch(err){
        alert(err)
    }
}
export const saveNewPhotoThunkCreator = (file: any) => async (dispatch: any) => {
    dispatch(toggleFetch(true))
    let response = await profileAPI.savePhoto(file)

    if (response.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.photos))
        dispatch(toggleFetch(false))
    }
}

export const saveProfileThunkCreator = (data: ProfileType) => async (dispatch: any, getState: any) => {
    dispatch(toggleFetch(true))
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(data)

    if (response.resultCode === 0) {
        dispatch(getProfileThunkCreator(userId))
        dispatch(toggleFetch(false))
    } else {
        dispatch(toggleFetch(false))
        dispatch(stopSubmit('newProfileData', {_error: response.messages}))
    }
}