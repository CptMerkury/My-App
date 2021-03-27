import {authAPI} from "../../../api/api";
import {getCaptcha, setAuthData} from "../../reducers/auth/authReducer";
import {stopSubmit} from "redux-form";

export const checkAuthThunkCreator = () => async (dispatch:any) => {
    let response = await authAPI.checkAuth()
    if (response.resultCode === 0) {
        let {id, login, email, isAuth = true} = response.data
        dispatch(setAuthData(id, email, login, isAuth))
    }
}
export const signOutThunkCreator = () => async (dispatch:any) => {
    let response = await authAPI.signOut()
    if (response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}

export const signInThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    let response = await authAPI.signIn(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(checkAuthThunkCreator())
    } else if (response.resultCode === 10) {
        let data = await authAPI.getCaptcha()
        dispatch(getCaptcha(data.url))
    } else {
        dispatch(stopSubmit('login', {_error: response.messages}))
    }
}
