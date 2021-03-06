import {authAPI} from "../../api/api";
import {setAuthData} from "../reducers/auth/authReducer";
import {stopSubmit} from "redux-form";

export const checkAuthThunkCreator = () => async (dispatch) => {
    let response = await authAPI.checkAuth()
    if (response.resultCode === 0) {
        let {id, login, email, isAuth = true} = response.data
        dispatch(setAuthData(id, email, login, isAuth))
    }
}
export const signOutThunkCreator = () => async (dispatch) => {
    let response = await authAPI.signOut()
    if (response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}

export const signInThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.signIn(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(checkAuthThunkCreator())
    } else {
        dispatch(stopSubmit('login', {_error: response.messages}))
    }
}
