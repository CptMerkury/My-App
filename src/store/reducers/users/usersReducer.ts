import {UpdateObjectInArray} from "../../../utils/helpers/object-helpers";
import {
    FOLLOW,
    IS_DISABLED_BTN,
    IS_USER_FETCHING,
    SET_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    UNFOLLOW
} from "../../actions/actions";
import {UserType} from "../../types/@types";

const initialState = {
    users: [] as Array<UserType> | null,
    pageSize: 5,
    totalCount: 400,
    currentPage: 1,
    isLoading: false,
    isDisabledBtn: [] as Array<number>, // Array of users id
};

export type UserInitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): UserInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: UpdateObjectInArray(state.users, action.payload, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: UpdateObjectInArray(state.users, action.payload, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            };
        case IS_USER_FETCHING:
            return {
                ...state,
                isLoading: action.payload
            };
        case IS_DISABLED_BTN:
            return {
                ...state,
                isDisabledBtn: action.payload
                    ? [...state.isDisabledBtn, action.userId]
                    /* метод filter вернет нам новый массив, в котором удалит тот id, который мы передали */
                    : state.isDisabledBtn.filter(id => id !== action.userId)
            };
        default:
            return state
    }
}

type FollowActionType = {
    type: typeof FOLLOW
    payload: number
}
export const follow = (userID: number): FollowActionType => ({
    type: FOLLOW,
    payload: userID
})

type UnfollowActionType = {
    type: typeof UNFOLLOW
    payload: number
}
export const unfollow = (userID: number): UnfollowActionType => ({
    type: UNFOLLOW,
    payload: userID
})

type SetUserActionType = {
    type: typeof SET_USERS
    payload: any
}
export const setUsers = (users: any): SetUserActionType => ({
    type: SET_USERS,
    payload: users
})

type SetPageActionType = {
    type: typeof SET_PAGE
    payload: number
}
export const setPage = (num: number): SetPageActionType => ({
    type: SET_PAGE,
    payload: num
})

type SetTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT
    payload: number
}
export const setTotalCount = (num: number): SetTotalCountActionType => ({
    type: SET_TOTAL_COUNT,
    payload: num
})

type ToggleFetchActionType = {
    type: typeof IS_USER_FETCHING
    payload: boolean
}
export const toggleFetch = (bool: boolean): ToggleFetchActionType => ({
    type: IS_USER_FETCHING,
    payload: bool
})

type ToggleDisableBtnActionType = {
    type: typeof IS_DISABLED_BTN
    payload: boolean
    userId: number
}
export const toggleDisabledBtn = (bool: boolean, id: number): ToggleDisableBtnActionType => ({
    type: IS_DISABLED_BTN,
    payload: bool,
    userId: id,
})

export default usersReducer

