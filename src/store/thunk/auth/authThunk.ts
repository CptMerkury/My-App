import {authAPI} from "../../../api/api";
import {AuthActionsTypes, getCaptcha, setAuthData} from "../../reducers/auth/authReducer";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../store";

type ThunkAction_AuthType = ThunkAction<void, AppStateType, unknown, AuthActionsTypes>

export const checkAuthThunkCreator = (): ThunkAction_AuthType =>
    async (dispatch) => {
        let response = await authAPI.checkAuth()
        if (response.resultCode === 0) {
            let {id, login, email, isAuth = true} = response.data
            dispatch(setAuthData(id, email, login, isAuth))
        }
    }
export const signOutThunkCreator = (): ThunkAction_AuthType =>
    async (dispatch) => {
        let response = await authAPI.signOut()
        if (response.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }

export const signInThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: boolean): ThunkAction_AuthType =>
    async (dispatch) => {
        let response = await authAPI.signIn(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            dispatch(checkAuthThunkCreator())
        } else if (response.resultCode === 10) {
            let data = await authAPI.getCaptcha()
            dispatch(getCaptcha(data.url))
        } else {
            // @ts-ignore
            dispatch(stopSubmit('login', {_error: response.messages}))
        }
    }
