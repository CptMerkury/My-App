import {usersAPI} from "../../../api/api";
import {
    follow,
    setPage,
    setTotalCount,
    setUsers,
    toggleDisabledBtn,
    toggleFetch,
    unfollow
} from "../../reducers/users/usersReducer";


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleFetch(true))
    /* Мы сделали инкапсуляцию axios метода в файл api */
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
    dispatch(toggleFetch(false))
}

export const getPageThunkCreator = (num: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setPage(num))
    dispatch(toggleFetch(true))
    /* Мы сделали инкапсуляцию axios метода в файл api */
    let data = await usersAPI.getPage(num, pageSize)
    dispatch(setUsers(data.items))
    dispatch(toggleFetch(false))
}

const follow_unfollow_Flow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleDisabledBtn(true, userId))

    const response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleDisabledBtn(false, userId))
    } else {
        console.log('Error AXIOS', response.messages)
    }
}

export const setFollowThunkCreator = (id: number) => async (dispatch: any) => {
    await follow_unfollow_Flow(dispatch, id, usersAPI.setFollow, follow)
}

export const setUnfollowThunkCreator = (id: number) => async (dispatch: any) => {
    await follow_unfollow_Flow(dispatch, id, usersAPI.setUnfollow, unfollow)
}