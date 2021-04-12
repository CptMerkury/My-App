import {GET_CAPTCHA, SET_AUTH_DATA} from "../../actions/actions";
import {InferActionsType} from "../../store";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isLoading: false,
    captcha: null as string | null
};

export type AuthInitialStateType = typeof initialState;
export type AuthActionsTypes = InferActionsType<typeof authActions>

/* Need add typification for action */
const authReducer = (state = initialState, action: AuthActionsTypes): AuthInitialStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: !state.isAuth
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

export const authActions = {
    setAuthData: (userId: number | null, email: string | null, login: string | null) => ({
        type: SET_AUTH_DATA,
        payload: {userId, email, login}
    } as const),
    getCaptcha: (url: string) => ({
        type: GET_CAPTCHA,
        payload: url
    } as const)

}

export default authReducer
