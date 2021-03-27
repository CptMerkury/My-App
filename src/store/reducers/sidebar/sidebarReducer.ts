let initialState = {
    friendList: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dmitri'},
        {id: 3, name: 'Max'},
    ],
}

export type SidebarInitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): SidebarInitialStateType => {

    return state
}

export default sidebarReducer