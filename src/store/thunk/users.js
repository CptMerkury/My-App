import {usersAPI} from "../../api/api";
import {
    follow,
    setPage,
    setTotalCount,
    setUsers,
    toggleDisabledBtn,
    toggleFetch,
    unfollow
} from "../reducers/users/usersReducer";


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetch(true))
    //Мы сделали инкапсуляцию axios метода в файл api
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))
    dispatch(toggleFetch(false))
}

export const getPageThunkCreator = (num, pageSize) => async (dispatch) => {
    dispatch(setPage(num))
    dispatch(toggleFetch(true))
    //Мы сделали инкапсуляцию axios метода в файл api
    let data = await usersAPI.getPage(num, pageSize)
    dispatch(setUsers(data.items))
    dispatch(toggleFetch(false))
}

export const setFollowThunkCreator = (id) => async (dispatch) => {
    dispatch(toggleDisabledBtn(true, id))
    //Мы сделали инкапсуляцию axios метода в файл api
    let data = await usersAPI.setFollow(id)
    if (data.resultCode === 0) {
        dispatch(follow(id))
        dispatch(toggleDisabledBtn(false, id))
    } else {
        console.log('Error AXIOS', data.messages)
    }
}

export const setUnfollowThunkCreator = (id) => async (dispatch) => {
    dispatch(toggleDisabledBtn(true, id))
    //Мы сделали инкапсуляцию axios метода в файл api
    let data = await usersAPI.setUnfollow(id)
    if (data.resultCode === 0) {
        dispatch(unfollow(id))
        dispatch(toggleDisabledBtn(false, id))
    } else {
        console.log('Error AXIOS', data.messages)
    }
}