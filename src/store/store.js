import {combineReducers, createStore} from "redux";
import profileReducer from "./api-profile/profileReducer";
import dialogsReducer from "./api-dialogs/dialogsReducer";
import sidebarReducer from "./api-sidebar/sidebarReducer";
import usersReducer from "./api-users/usersReducer";
import authReducer from "./api-auth/authReducer";

//Передаем в store с помощью combineReducers все Reducer который объеденит их в один
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
})

let store = createStore(reducers);

export default store