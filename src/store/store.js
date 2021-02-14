import {combineReducers, createStore} from "redux";
import profileReducer from "./api-profile/profileReducer";
import dialogsReducer from "./api-dialogs/dialogsReducer";
import sidebarReducer from "./api-sidebar/sidebarReducer";
import usersReducer from "./api-users/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store