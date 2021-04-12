import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducers/profile/profileReducer";
import dialogsReducer from "./reducers/dialogs/dialogsReducer";
import sidebarReducer from "./reducers/sidebar/sidebarReducer";
import usersReducer from "./reducers/users/usersReducer";
import authReducer from "./reducers/auth/authReducer";
import appReducer from "./reducers/app/appReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

/* Передаем в store с помощью combineReducers все Reducer который объеденит их в один */
let RootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
})

type RootReducerType = typeof RootReducer;
/* Создаем глобальный тип для state */
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
