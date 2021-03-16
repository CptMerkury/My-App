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


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetch(true))
    /* Мы сделали инкапсуляцию axios метода в файл api */
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
    dispatch(toggleFetch(false))
}

export const getPageThunkCreator = (num, pageSize) => async (dispatch) => {
    dispatch(setPage(num))
    dispatch(toggleFetch(true))
    /* Мы сделали инкапсуляцию axios метода в файл api */
    let data = await usersAPI.getPage(num, pageSize)
    dispatch(setUsers(data.items))
    dispatch(toggleFetch(false))
}

const follow_unfollow_Flow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleDisabledBtn(true, userId))

    const responce = await apiMethod(userId)

    if (responce.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleDisabledBtn(false, userId))
    } else {
        console.log('Error AXIOS', responce.messages)
    }
}

export const setFollowThunkCreator = (id) => async (dispatch) => {
    await follow_unfollow_Flow(dispatch, id, usersAPI.setFollow, follow)
}

export const setUnfollowThunkCreator = (id) => async (dispatch) => {
    await follow_unfollow_Flow(dispatch, id, usersAPI.setUnfollow, unfollow)
}