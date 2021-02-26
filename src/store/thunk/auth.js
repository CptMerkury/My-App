import {authAPI, logAPI} from "../../api/api";
import {setAuthData, signOut} from "../reducers/auth/authReducer";

export const checkAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.checkAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    dispatch(setAuthData(id, login, email))
                }else{
                    alert(response.data.messages)
                }
            })
    }
}
export const signOutThunkCreator = () => {
    return (dispatch) => {
        logAPI.signOut()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(signOut())
                }else{
                    alert(response.data.messages)
                }
            })
    }
}
