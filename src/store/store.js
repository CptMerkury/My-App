import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers_selectors/profile/profileReducer";
import dialogsReducer from "./reducers_selectors/dialogs/dialogsReducer";
import sidebarReducer from "./reducers_selectors/sidebar/sidebarReducer";
import usersReducer from "./reducers_selectors/users/usersReducer";
import authReducer from "./reducers_selectors/auth/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducers_selectors/app/appReducer";

//Передаем в store с помощью combineReducers все Reducer который объеденит их в один
let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store