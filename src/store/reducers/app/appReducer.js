import {INIT_ACTIONS} from "../../actions/actions";

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_ACTIONS.SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}

export const InitializeSuccess = () => ({
    type: INIT_ACTIONS.SET_INITIALIZED,
})

export default appReducer