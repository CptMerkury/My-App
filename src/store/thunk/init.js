import {InitializeSuccess} from "../reducers/app/appReducer";
import {checkAuthThunkCreator} from "./auth";

export const InitializeApp = () => (dispatch) => {
    const promiseAuth = dispatch(checkAuthThunkCreator())

    Promise.all([promiseAuth])
        .then(() => {
            dispatch(InitializeSuccess())
        })
}
