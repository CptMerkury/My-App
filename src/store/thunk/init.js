import {InitializeSuccess} from "../reducers_selectors/app/appReducer";
import {checkAuthThunkCreator} from "./auth";

export const InitializeApp = () => (dispatch) => {
    const promiseAuth = dispatch(checkAuthThunkCreator())

    Promise.all([promiseAuth])
        .then(() => {
            dispatch(InitializeSuccess())
        })
}
