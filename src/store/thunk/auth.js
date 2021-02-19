import {authAPI} from "../../api/api";
import {setAuthData} from "../reducers/auth/authReducer";

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