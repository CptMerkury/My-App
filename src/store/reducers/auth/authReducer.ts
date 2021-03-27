const SET_AUTH_DATA = 'my-app/auth/SET_AUTH_DATA';
const GET_CAPTCHA = 'my-app/auth/GET_CAPTCHA';

type InitAuthStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isLoading: boolean
    captcha: string | null
}

type SetAuthActionType = {
    type: typeof SET_AUTH_DATA
    payload: {
        userId: number
        email: string
        login: string
        isAuth: boolean
    }
}

type GetCaptchaActionType = {
    type: typeof GET_CAPTCHA
    payload: string
}

const initialState: InitAuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false,
    captcha: null
};

const authReducer = (state = initialState, action: any): InitAuthStateType => {
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

export const setAuthData = (userId: number, email: string, login: string, isAuth: boolean): SetAuthActionType => ({
    type: SET_AUTH_DATA,
    payload: {userId, email, login, isAuth}
})

export const getCaptcha = (url: string): GetCaptchaActionType => ({
    type: GET_CAPTCHA,
    payload: url
})

export default authReducer