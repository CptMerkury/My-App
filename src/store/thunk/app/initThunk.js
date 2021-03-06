import {InitializeSuccess} from "../../reducers/app/appReducer";
import {checkAuthThunkCreator} from "../auth/authThunk";

export const InitializeApp = () => (dispatch) => {
    let promiseAuth = dispatch(checkAuthThunkCreator())

    promiseAuth.then(() => {
        dispatch(InitializeSuccess())
    })
}
