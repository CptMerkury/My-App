import {AUTH_ACTIONS} from "../../actions/actions";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case AUTH_ACTIONS.GET_CAPTCHA:
            return {
                ...state,
                captcha: action.payload
            };
        default:
            return state;
    }
}

export const setAuthData = (userId, email, login, isAuth) => ({
    type: AUTH_ACTIONS.SET_AUTH_DATA,
    payload: {userId, email, login, isAuth}
})

export const getCaptcha = (url) => ({
    type: AUTH_ACTIONS.GET_CAPTCHA,
    payload: url
})

export default authReducer