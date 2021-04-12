import {checkAuthThunkCreator} from "../auth/authThunk";
import {appActions} from "../../reducers/app/appReducer";

export const InitializeApp = () => (dispatch: any) => {
    let promiseAuth = dispatch(checkAuthThunkCreator())

    Promise.all([promiseAuth])
        .then(() => {
            dispatch(appActions.InitializeSuccess())
        })
}
