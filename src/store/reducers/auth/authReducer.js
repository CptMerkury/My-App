import {AUTH_ACTIONS} from "../../actions/actions";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoading: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_AUTH_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}

export const setAuthData = (userId, email, login, isAuth) => ({
    type: AUTH_ACTIONS.SET_AUTH_DATA,
    payload: {userId, email, login, isAuth}
})

export default authReducer