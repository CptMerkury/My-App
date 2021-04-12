import {
    follow,
    setPage,
    setTotalCount,
    setUsers,
    toggleDisabledBtn,
    toggleFetch,
    unfollow, UserActionsTypes
} from "../../reducers/users/usersReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../store";
import {Dispatch} from "redux";
import {usersAPI} from "../../../api/user-api";
import {ResultCodesEnum} from "../../../api/instance-api";


type ThunkAction_UserTypes = ThunkAction<Promise<void>, AppStateType, unknown, UserActionsTypes>

export const getUsersThunkCreator = (currentPage: number = 1, pageSize: number): ThunkAction_UserTypes =>
    async (dispatch) => {
        dispatch(toggleFetch(true))
        /* Мы сделали инкапсуляцию axios метода в файл api */
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(toggleFetch(false))
    }

export const getPageThunkCreator = (num: number, pageSize: number): ThunkAction_UserTypes =>
    async (dispatch) => {
        dispatch(setPage(num))
        dispatch(toggleFetch(true))
        /* Мы сделали инкапсуляцию axios метода в файл api */
        let data = await usersAPI.getUsers(num, pageSize)
        dispatch(setUsers(data.items))
        dispatch(toggleFetch(false))
    }

const _follow_unfollow_flow = async (dispatch: Dispatch<UserActionsTypes>, userId: number,
                                     apiMethod: any, actionCreator: (userId: number) => UserActionsTypes) => {
    dispatch(toggleDisabledBtn(true, userId))
    const response = await apiMethod(userId)
    if (response.resultCode === ResultCodesEnum.SUCCESS) {
        dispatch(actionCreator(userId))
        dispatch(toggleDisabledBtn(false, userId))
    } else {
        console.log('Error AXIOS', response.messages)
    }
}

export const setFollowThunkCreator = (id: number): ThunkAction_UserTypes =>
    async (dispatch) => {
        await _follow_unfollow_flow(dispatch, id, usersAPI.setFollow, follow)
    }

export const setUnfollowThunkCreator = (id: number): ThunkAction_UserTypes =>
    async (dispatch) => {
        await _follow_unfollow_flow(dispatch, id, usersAPI.setUnfollow, unfollow)
    }
