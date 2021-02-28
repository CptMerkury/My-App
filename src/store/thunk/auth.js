import {authAPI} from "../../api/api";
import {setAuthData} from "../reducers/auth/authReducer";

export const checkAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.checkAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    console.log(response.resultCode)
                    let {id, login, email, isAuth = true} = response.data
                    dispatch(setAuthData(id, email, login, isAuth))
                }
            })
    }
}
export const signOutThunkCreator = () => {
    return (dispatch) => {
        authAPI.signOut()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthData(null, null, null,  false))}
            })
    }
}
export const signInThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.signIn(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(checkAuthThunkCreator())
                }
            })
    }
}
