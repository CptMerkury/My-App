import {APP_ACTIONS} from "../../actions/action";

let initialState = {
    initialized: false,

};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.SET_INITIALIZED: {
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
    type: APP_ACTIONS.SET_INITIALIZED,
})

export default appReducer