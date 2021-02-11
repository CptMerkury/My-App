import {APP_ACTIONS} from "./action";

let initialState = {
    usersList: [ ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(user => {
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
                usersList: state.usersList.map(user => {
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
                usersList: [...state.usersList, ...action.payload]
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

export const setUsersAC = (usersList) => ({
    type: APP_ACTIONS.SET_USERS,
    payload: usersList
})

export default usersReducer

