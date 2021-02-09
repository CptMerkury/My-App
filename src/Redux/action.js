export const APP_ACTIONS = {
    ADD_POST: 'ADD_POST',
    SEND_MESSAGE: 'SEND_MESSAGE',
    UPDATE_NEW_POST_TEXT: 'UPDATE_NEW_POST_TEXT',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE_NEW_MESSAGE_TEXT,'
}

//Profile
export const addPostCreator = () => ({
    type: APP_ACTIONS.ADD_POST
})

export const updatePostBodyCreator = (value) => ({
    type: APP_ACTIONS.UPDATE_NEW_POST_TEXT,
    payload: value
})

//Message
export const sendMessageCreator = () => ({
    type: APP_ACTIONS.SEND_MESSAGE
})

export const updateMessageBodyCreator = (value) => ({
    type: APP_ACTIONS.UPDATE_NEW_MESSAGE_TEXT,
    payload: value
})