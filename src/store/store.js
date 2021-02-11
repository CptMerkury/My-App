import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store