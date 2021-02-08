import {APP_ACTIONS} from "../store";

//Profile
export const addNewPost = () => ({
    type: APP_ACTIONS.ADD_POST
})

export const changePostTextarea = (value) => ({
    type: APP_ACTIONS.UPDATE_NEW_POST_TEXT,
    payload: value
})

//Message
export const addNewMessage = () => ({
    type: APP_ACTIONS.ADD_MESSAGE
})

export const changeMessageTextarea = (value) => ({
    type: APP_ACTIONS.UPDATE_NEW_MESSAGE_TEXT,
    payload: value
})