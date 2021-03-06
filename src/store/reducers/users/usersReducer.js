import {USER_ACTIONS} from "../../actions/actions";
import {UpdateObjectInArray} from "../../../utils/helpers/object-helpers";

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 400,
    currentPage: 1,
    isLoading: false,
    isDisabledBtn: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTIONS.FOLLOW:
            return {
                ...state,
                users: UpdateObjectInArray(state.users, action.payload, 'id', {followed: true})
            }
        case USER_ACTIONS.UNFOLLOW:
            return {
                ...state,
                users: UpdateObjectInArray(state.users, action.payload, 'id', {followed: false})
            }
        case USER_ACTIONS.SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case USER_ACTIONS.SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case USER_ACTIONS.SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            };
        case USER_ACTIONS.IS_FETCHING:
            return {
                ...state,
                isLoading: action.payload
            };
        case USER_ACTIONS.IS_DISABLED_BTN:
            return {
                ...state,
                isDisabledBtn: action.payload
                    ? [...state.isDisabledBtn, action.userId]
                    //метод filter вернет нам новый массив, в котором удалит тот id, который мы передали
                    : state.isDisabledBtn.filter(id => id !== action.userId)
            };
        default:
            return state
    }
}
export const follow = (userID) => ({
    //required параметр type
    type: USER_ACTIONS.FOLLOW,
    payload: userID
})
export const unfollow = (userID) => ({
    type: USER_ACTIONS.UNFOLLOW,
    payload: userID
})

export const setUsers = (users) => ({
    type: USER_ACTIONS.SET_USERS,
    payload: users
})

export const setPage = (num) => ({
    type: USER_ACTIONS.SET_PAGE,
    payload: num
})
export const setTotalCount = (num) => ({
    type: USER_ACTIONS.SET_TOTAL_COUNT,
    payload: num
})
export const toggleFetch = (bool) => ({
    type: USER_ACTIONS.IS_FETCHING,
    payload: bool
})
export const toggleDisabledBtn = (bool, id) => ({
    type: USER_ACTIONS.IS_DISABLED_BTN,
    payload: bool,
    userId: id,
})

export default usersReducer

