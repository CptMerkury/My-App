const SET_INITIALIZED = 'my-app/init/SET_INITIALIZED';

type InitializeSuccessActionType = {
    type: typeof SET_INITIALIZED
};

type InitialStateType = {
    initialized: boolean,
}

const initialState: InitialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any):InitialStateType => {
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

export const InitializeSuccess = (): InitializeSuccessActionType => ({
    type: SET_INITIALIZED,
})

export default appReducer;