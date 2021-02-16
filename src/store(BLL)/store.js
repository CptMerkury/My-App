import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile/profileReducer";
import dialogsReducer from "./reducers/dialogs/dialogsReducer";
import sidebarReducer from "./reducers/sidebar/sidebarReducer";
import usersReducer from "./reducers/users/usersReducer";
import authReducer from "./reducers/auth/authReducer";

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