import {authActions, AuthActionsTypes} from "../../reducers/auth/authReducer";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../store";
import {authAPI} from "../../../api/auth-api";
import {ResultCodeForCaptchaCEnum, ResultCodesEnum} from "../../../api/instance-api";

type ThunkAction_AuthType = ThunkAction<void, AppStateType, unknown, AuthActionsTypes>

export const checkAuthThunkCreator = (): ThunkAction_AuthType =>
    async (dispatch) => {
        let response = await authAPI.checkAuth()
        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            let {id, login, email} = response.data
            dispatch(authActions.setAuthData(id, email, login))
        }
    }
export const signOutThunkCreator = (): ThunkAction_AuthType =>
    async (dispatch) => {
        let response = await authAPI.signOut()
        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            dispatch(authActions.setAuthData(null, null, null))
        }
    }

export const signInThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: boolean): ThunkAction_AuthType =>
    async (dispatch) => {
        let response = await authAPI.signIn(email, password, rememberMe, captcha)
        if (response.resultCode === ResultCodesEnum.SUCCESS) {
            dispatch(checkAuthThunkCreator())
        } else if (response.resultCode === ResultCodeForCaptchaCEnum.ANTI_BOT) {
            let data = await authAPI.getCaptcha()
            dispatch(authActions.getCaptcha(data.url))
        } else {
            // @ts-ignore
            dispatch(stopSubmit('login', {_error: response.messages}))
        }
    }
