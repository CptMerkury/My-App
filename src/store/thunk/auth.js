import {authAPI} from "../../api/api";
import {setAuthData} from "../reducers_selectors/auth/authReducer";
import {stopSubmit} from "redux-form";

export const checkAuthThunkCreator = () => (dispatch) => {
    return authAPI.checkAuth()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email, isAuth = true} = response.data
                dispatch(setAuthData(id, email, login, isAuth))
            }
        })
}
export const signOutThunkCreator = () => (dispatch) => {
    authAPI.signOut()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })

}
export const signInThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.signIn(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(checkAuthThunkCreator())
            } else {
                dispatch(stopSubmit('login', {_error: response.messages}))
            }
        })

}
