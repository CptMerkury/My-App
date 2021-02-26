import {authAPI} from "../../api/api";
import {setLogoutAC, setAuthData} from "../reducers/auth/authReducer";

export const checkAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.checkAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    dispatch(setAuthData(id, login, email))
                }
            })
    }
}
export const setLogoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.setLogout()
            .then(response => {
                if (response.resultCode === 0) {
                    console.log('Logout')
                    dispatch(setLogoutAC())
                }
            })
    }
}