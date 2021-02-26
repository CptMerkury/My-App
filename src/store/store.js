import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile/profileReducer";
import dialogsReducer from "./reducers/dialogs/dialogsReducer";
import sidebarReducer from "./reducers/sidebar/sidebarReducer";
import usersReducer from "./reducers/users/usersReducer";
import authReducer from "./reducers/auth/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

//Передаем в store с помощью combineReducers все Reducer который объеденит их в один
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store