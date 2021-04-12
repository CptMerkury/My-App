import {UserActionsTypes, usersActions} from "../../reducers/users/usersReducer";
import {Dispatch} from "redux";
import {usersAPI} from "../../../api/user-api";
import {ResultCodesEnum} from "../../../api/instance-api";
import {CommonThunkCreatorType} from "../../types/@types";

export const getUsersThunkCreator = (currentPage: number = 1, pageSize: number): CommonThunkCreatorType<UserActionsTypes> =>
    async (dispatch) => {
        dispatch(usersActions.toggleFetch(true))

        let response = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(usersActions.setUsers(response.items))
        dispatch(usersActions.setTotalCount(response.totalCount))
        dispatch(usersActions.toggleFetch(false))
    }

export const getPageThunkCreator = (num: number, pageSize: number): CommonThunkCreatorType<UserActionsTypes> =>
    async (dispatch) => {
        dispatch(usersActions.setPage(num))
        dispatch(usersActions.toggleFetch(true))

        let response = await usersAPI.getUsers(num, pageSize)

        dispatch(usersActions.setUsers(response.items))
        dispatch(usersActions.toggleFetch(false))
    }

const _follow_unfollow_flow = async (
    dispatch: Dispatch<UserActionsTypes>,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => UserActionsTypes) => {

    dispatch(usersActions.toggleDisabledBtn(true, userId))
    const response = await apiMethod(userId)

    if (response.resultCode === ResultCodesEnum.SUCCESS) {
        dispatch(actionCreator(userId))
        dispatch(usersActions.toggleDisabledBtn(false, userId))
    } else {
        console.log('Error AXIOS', response.messages)
    }
}

export const setFollowThunkCreator = (id: number): CommonThunkCreatorType<UserActionsTypes> =>
    async (dispatch) => {
        await _follow_unfollow_flow(dispatch, id, usersAPI.setFollow, usersActions.follow)
    }

export const setUnfollowThunkCreator = (id: number): CommonThunkCreatorType<UserActionsTypes> =>
    async (dispatch) => {
        await _follow_unfollow_flow(dispatch, id, usersAPI.setUnfollow, usersActions.unfollow)
    }
