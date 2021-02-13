import {APP_ACTIONS} from "./action";

let initialState = {
    users: [],
    pageSize: 4,
    totalCount: 400,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        case APP_ACTIONS.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        case APP_ACTIONS.SET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case APP_ACTIONS.SET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case APP_ACTIONS.SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            };
        default:
            return state
    }
}
export const followAC = (userID) => ({
    type: APP_ACTIONS.FOLLOW,
    payload: userID
})
export const unfollowAC = (userID) => ({
    type: APP_ACTIONS.UNFOLLOW,
    payload: userID
})

export const setUsersAC = (users) => ({
    type: APP_ACTIONS.SET_USERS,
    payload: users
})

export const setPageAC = (num) => ({
    type: APP_ACTIONS.SET_PAGE,
    payload: num
})
export const setTotalCountAC = (num) => ({
    type: APP_ACTIONS.SET_TOTAL_COUNT,
    payload: num
})

export default usersReducer

