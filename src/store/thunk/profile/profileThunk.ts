import {profileActions, ProfileActionsTypes,} from "../../reducers/profile/profileReducer";
import {FormAction, stopSubmit} from "redux-form";
import {ProfileType, CommonThunkCreatorType} from "../../types/@types";
import {profileAPI} from "../../../api/profile-api";
import {ResultCodesEnum} from "../../../api/instance-api";
import {isNull} from "util";

export const getProfileThunkCreator = (id: number): CommonThunkCreatorType<ProfileActionsTypes> =>
    async (dispatch) => {
        dispatch(profileActions.toggleFetch(true))

        let response = await profileAPI.getProfile(id)

        dispatch(profileActions.setProfileData(response))
        dispatch(profileActions.toggleFetch(false))
    }

export const getStatusThunkCreator = (id: number): CommonThunkCreatorType<ProfileActionsTypes> =>
    async (dispatch) => {
        dispatch(profileActions.toggleFetchStatus(true))

        let response = await profileAPI.getStatusProfile(id)

        dispatch(profileActions.getStatus(response))
        dispatch(profileActions.toggleFetchStatus(false))
    }

export const setStatusThunkCreator = (status: string): CommonThunkCreatorType<ProfileActionsTypes> =>
    async (dispatch) => {
        try {
            dispatch(profileActions.toggleFetchStatus(true))
            let response = await profileAPI.setStatus(status)

            if (response.resultCode === ResultCodesEnum.SUCCESS) {
                dispatch(profileActions.getStatus(status))
                dispatch(profileActions.toggleFetchStatus(false))
            }
        } catch (err) {
            alert(err)
        }
    }
export const saveNewPhotoThunkCreator = (file: File): CommonThunkCreatorType<ProfileActionsTypes> =>
    async (dispatch) => {
        dispatch(profileActions.toggleFetch(true))
        let response = await profileAPI.savePhoto(file)

        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            dispatch(profileActions.setPhotoSuccess(response.data.photos))
            dispatch(profileActions.toggleFetch(false))
        }
    }

export const saveProfileThunkCreator = (data: ProfileType): CommonThunkCreatorType<ProfileActionsTypes | FormAction> =>
    async (dispatch, getState) => {
        dispatch(profileActions.toggleFetch(true))

        const userId = getState().auth.userId
        let response = await profileAPI.saveProfile(data)

        if (response.resultCode === ResultCodesEnum.SUCCESS) {

            if (!isNull(userId)) {
                await dispatch(getProfileThunkCreator(userId))
            } else {
                throw new Error('User ID can\'t be null')
            }

            dispatch(profileActions.toggleFetch(false))
        } else {
            dispatch(profileActions.toggleFetch(false))
            dispatch(stopSubmit('newProfileData', {_error: response.messages}))
        }
    }
