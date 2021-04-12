import {
    profileActions,
    ProfileActionsTypes,
} from "../../reducers/profile/profileReducer";
import {stopSubmit} from "redux-form";
import {ProfileType} from "../../types/@types";
import {AppStateType} from "../../store";
import {ThunkAction} from "redux-thunk";
import {profileAPI} from "../../../api/profile-api";
import {ResultCodesEnum} from "../../../api/instance-api";

type ThunkAction_ProfileTypes = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsTypes>

export const getProfileThunkCreator = (id: number): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        dispatch(profileActions.toggleFetch(true))
        let dataProfile = await profileAPI.getProfile(id)
        dispatch(profileActions.setProfileData(dataProfile))
        dispatch(profileActions.toggleFetch(false))
    }

export const getStatusThunkCreator = (id: number): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        dispatch(profileActions.toggleFetchStatus(true))
        let dataStatus = await profileAPI.getStatusProfile(id)
        dispatch(profileActions.getStatus(dataStatus))
        dispatch(profileActions.toggleFetchStatus(false))
    }

export const setStatusThunkCreator = (status: string): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        try {
            dispatch(profileActions.toggleFetchStatus(true))
            let response = await profileAPI.setStatus(status)
            if (response.data.resultCode === ResultCodesEnum.SUCCESS) {
                dispatch(profileActions.getStatus(status))
                dispatch(profileActions.toggleFetchStatus(false))
            }
        } catch (err) {
            alert(err)
        }
    }
export const saveNewPhotoThunkCreator = (file: Blob): ThunkAction_ProfileTypes =>
    async (dispatch) => {
        dispatch(profileActions.toggleFetch(true))
        let response = await profileAPI.savePhoto(file)

        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            dispatch(profileActions.setPhotoSuccess(response.data.photos))
            dispatch(profileActions.toggleFetch(false))
        }
    }

export const saveProfileThunkCreator = (data: ProfileType): ThunkAction_ProfileTypes =>
    async (dispatch, getState) => {
        dispatch(profileActions.toggleFetch(true))
        const userId = getState().auth.userId as number
        let response = await profileAPI.saveProfile(data)

        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            await dispatch(getProfileThunkCreator(userId))
            dispatch(profileActions.toggleFetch(false))
        } else {
            dispatch(profileActions.toggleFetch(false))
            dispatch(stopSubmit('newProfileData', {_error: response.messages}))
        }
    }
