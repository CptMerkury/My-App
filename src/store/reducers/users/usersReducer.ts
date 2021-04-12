import {UpdateObjectInArray} from "../../../utils/helpers/object-helpers";
import {InferActionsType} from "../../store";
import {UserType} from "../../types/@types";
import {
    FOLLOW,
    IS_DISABLED_BTN,
    IS_USER_FETCHING,
    SET_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    UNFOLLOW
} from "../../actions/actions";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalCount: 400,
    currentPage: 1,
    isLoading: false,
    isDisabledBtn: [] as Array<number>, // Array of users id
};

export type UserInitialStateType = typeof initialState
export type UserActionsTypes = InferActionsType<typeof usersActions>

const usersReducer = (state = initialState, action: UserActionsTypes): UserInitialStateType => {
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

export const usersActions = {
    follow: (userID: number) => ({
        type: FOLLOW,
        payload: userID
    } as const),

    unfollow: (userID: number) => ({
        type: UNFOLLOW,
        payload: userID
    } as const),

    setUsers: (users: Array<UserType>) => ({
        type: SET_USERS,
        payload: users
    } as const),

    setPage: (num: number) => ({
        type: SET_PAGE,
        payload: num
    } as const),

    setTotalCount: (num: number) => ({
        type: SET_TOTAL_COUNT,
        payload: num
    } as const),

    toggleFetch: (bool: boolean) => ({
        type: IS_USER_FETCHING,
        payload: bool
    } as const),

    toggleDisabledBtn: (bool: boolean, id: number) => ({
        type: IS_DISABLED_BTN,
        payload: bool,
        userId: id,
    } as const)
}

export default usersReducer

