import {APP_ACTIONS} from "../actions/action";

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Vova'},
        {id: 5, name: 'Andrew'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What`s Up'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hi'},
        {id: 7, message: 'What`s Up'},
        {id: 8, message: 'How are you'},
        {id: 9, message: 'Hello'},
        {id: 10, message: 'Yo'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            };
        }
        case APP_ACTIONS.UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.payload
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: APP_ACTIONS.SEND_MESSAGE
})

export const updateMessageBodyCreator = (value) => ({
    type: APP_ACTIONS.UPDATE_NEW_MESSAGE_TEXT,
    payload: value
})

export default dialogsReducer