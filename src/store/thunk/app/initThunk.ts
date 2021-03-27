import {InitializeSuccess} from "../../reducers/app/appReducer";
import {checkAuthThunkCreator} from "../auth/authThunk";

export const InitializeApp = () => (dispatch: any) => {
    let promiseAuth = dispatch(checkAuthThunkCreator())

    promiseAuth.then(() => {
        dispatch(InitializeSuccess())
    })
}
