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


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetch(true))
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
                dispatch(toggleFetch(false))
            })

    }
}

export const getPageThunkCreator = (num, pageSize) => {
    return (dispatch) => {
        dispatch(setPage(num))
        dispatch(toggleFetch(true))
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.getPage(num, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(toggleFetch(false))
            })

    }
}

export const setFollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabledBtn(true, id))
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.setFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
                dispatch(toggleDisabledBtn(false, id))
            } else {
                console.log('Error AXIOS', data)
            }
        })
    }
}

export const setUnfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabledBtn(true, id))
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.setUnfollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
                console.log('Unfollow', data)
                dispatch(toggleDisabledBtn(false, id))
            } else {
                console.log('Error AXIOS', data)
            }
        })
    }
}