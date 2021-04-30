import {checkAuthThunkCreator} from "../auth/authThunk";
import {appActions, InitActionsTypes} from "../../reducers/app/appReducer";
import {CommonThunkCreatorType} from "../../types/@types";

export const InitializeApp = (): CommonThunkCreatorType<InitActionsTypes> => async (dispatch) => {
    let promiseAuth = dispatch(checkAuthThunkCreator())

    Promise.all([promiseAuth])
        .then(() => {
            dispatch(appActions.InitializeSuccess())
        })
}
