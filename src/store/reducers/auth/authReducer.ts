import {GET_CAPTCHA, SET_AUTH_DATA} from "../../actions/actions";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isLoading: false,
    captcha: null as string | null
};

export type AuthInitialStateType = typeof initialState;
export type AuthActionsTypes = SetAuthActionType |
    GetCaptchaActionType

/* Need add typification for action */
const authReducer = (state = initialState, action: AuthActionsTypes): AuthInitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA:
            return {
                ...state,
                captcha: action.payload
            };
        default:
            return state;
    }
}

type SetAuthActionType = {
    type: typeof SET_AUTH_DATA
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}

export const setAuthData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthActionType => ({
    type: SET_AUTH_DATA,
    payload: {userId, email, login, isAuth}
})


type GetCaptchaActionType = {
    type: typeof GET_CAPTCHA
    payload: string | null
}

export const getCaptcha = (url: string): GetCaptchaActionType => ({
    type: GET_CAPTCHA,
    payload: url
})

export default authReducer