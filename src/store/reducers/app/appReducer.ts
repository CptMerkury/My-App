import {SET_INITIALIZED} from "../../actions/actions";
import {InferActionsType} from "../../store";

const initialState = {
    initialized: false,
};

export type InitialAppStateType = typeof initialState
export type InitActionsTypes = InferActionsType<typeof appActions>

const appReducer = (state = initialState, action: InitActionsTypes): InitialAppStateType => {
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

export const appActions = {
    InitializeSuccess : () => ({
        type: SET_INITIALIZED,
    } as const)
}

export default appReducer;
