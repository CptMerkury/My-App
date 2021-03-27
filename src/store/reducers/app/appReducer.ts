import {SET_INITIALIZED} from "../../actions/actions";

const initialState = {
    initialized: false,
};

export type InitialAppStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialAppStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
};

type InitializeSuccessActionType = {
    type: typeof SET_INITIALIZED
};

export const InitializeSuccess = (): InitializeSuccessActionType => ({
    type: SET_INITIALIZED,
})

export default appReducer;