import {profileAPI, ResultCodesEnum} from "../../../api/api";
import {
    getStatus, ProfileActionsTypes,
    setPhotoSuccess,
    setProfileData,
    toggleFetch,
    toggleFetchStatus
} from "../../reducers/profile/profileReducer";
import {stopSubmit} from "redux-form";
import {ProfileType} from "../../types/@types";
import {AppStateType} from "../../store";
import {ThunkAction} from "redux-thunk";

type ThunkAction_ProfileTypes = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsTypes>

export const getProfileThunkCreator = (id: number): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        dispatch(toggleFetch(true))
        let dataProfile = await profileAPI.getProfile(id)
        dispatch(setProfileData(dataProfile))
        dispatch(toggleFetch(false))
    }

export const getStatusThunkCreator = (id: number): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        dispatch(toggleFetchStatus(true))
        let dataStatus = await profileAPI.getStatusProfile(id)
        dispatch(getStatus(dataStatus))
        dispatch(toggleFetchStatus(false))
    }

export const setStatusThunkCreator = (status: string): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        try {
            dispatch(toggleFetchStatus(true))
            let response = await profileAPI.setStatus(status)
            if (response.data.resultCode === ResultCodesEnum.SUCCESS) {
                dispatch(getStatus(status))
                dispatch(toggleFetchStatus(false))
            }
        } catch (err) {
            alert(err)
        }
    }
export const saveNewPhotoThunkCreator = (file: Blob): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        dispatch(toggleFetch(true))
        let response = await profileAPI.savePhoto(file)

        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            dispatch(setPhotoSuccess(response.data.photos))
            dispatch(toggleFetch(false))
        }
    }

export const saveProfileThunkCreator = (data: ProfileType): ThunkAction_ProfileTypes =>
    async (dispatch, getState) => {
        dispatch(toggleFetch(true))
        const userId = getState().auth.userId as number
        let response = await profileAPI.saveProfile(data)

        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            await dispatch(getProfileThunkCreator(userId))
            dispatch(toggleFetch(false))
        } else {
            dispatch(toggleFetch(false))
            dispatch(stopSubmit('newProfileData', {_error: response.messages}))
        }
    }