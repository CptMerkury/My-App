import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profile/profileReducer";
import dialogsReducer from "./reducers/dialogs/dialogsReducer";
import sidebarReducer from "./reducers/sidebar/sidebarReducer";
import usersReducer from "./reducers/users/usersReducer";
import authReducer from "./reducers/auth/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app/appReducer";

/* Передаем в store с помощью combineReducers все Reducer который объеденит их в один */
let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
})

/* Add redux_dev_tools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store