import {InitializeSuccess} from "../reducers/app/appReducer";
import {checkAuthThunkCreator} from "./auth";

export const InitializeApp = () => (dispatch) => {
    let promiseAuth = dispatch(checkAuthThunkCreator())

    promiseAuth.then(() => {
        dispatch(InitializeSuccess())
    })
}
