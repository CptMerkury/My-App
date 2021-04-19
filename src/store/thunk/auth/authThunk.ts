import {authActions, AuthActionsTypes} from "../../reducers/auth/authReducer";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../../../api/auth-api";
import {ResultCodeForCaptchaCEnum, ResultCodesEnum} from "../../../api/instance-api";
import {CommonThunkCreatorType} from "../../types/@types";

export const checkAuthThunkCreator = (): CommonThunkCreatorType<AuthActionsTypes> => async (dispatch) => {
    let response = await authAPI.checkAuth()

    if (response.resultCode === ResultCodesEnum.SUCCESS) {
        let {id, login, email} = response.data
        dispatch(authActions.setAuthData(id, email, login))
    }
}
export const signOutThunkCreator = (): CommonThunkCreatorType<AuthActionsTypes> => async (dispatch) => {
    let response = await authAPI.signOut()

    if (response.resultCode === ResultCodesEnum.SUCCESS) {
        dispatch(authActions.setAuthData(null, null, null))
    }
}

export const signInThunkCreator = (
    email: string, password: string,
    rememberMe: boolean, captcha: boolean
): CommonThunkCreatorType<AuthActionsTypes | FormAction> => async (dispatch) => {
    let response = await authAPI.signIn(email, password, rememberMe, captcha)

    if (response.resultCode === ResultCodesEnum.SUCCESS) {
        dispatch(checkAuthThunkCreator())
    } else if (response.resultCode === ResultCodeForCaptchaCEnum.ANTI_BOT) {
        let data = await authAPI.getCaptcha()
        dispatch(authActions.getCaptcha(data.url))
    } else {
        dispatch(stopSubmit('login', {_error: response.messages}))
    }
}
