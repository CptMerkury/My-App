const SET_INITIALIZED = 'my-app/init/SET_INITIALIZED';

type InitializeSuccessActionTypes = {
    type: typeof SET_INITIALIZED
};

const StateTypeCreator = {
    initialized: null as boolean | null,
};

type InitialStateType = typeof StateTypeCreator;

let initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any) => {
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

export const InitializeSuccess = () => ({
    type: SET_INITIALIZED,
}) as InitializeSuccessActionTypes

export default appReducer;