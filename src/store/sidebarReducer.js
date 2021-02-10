// import {APP_ACTIONS} from "./action";

let initialState = {
    userList: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Max'},
    ],
}

const sidebarReducer = (state = initialState, action) => {

    return {
        ...state
    }
}

export default sidebarReducer