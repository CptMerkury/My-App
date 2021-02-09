import {APP_ACTIONS} from "./action";

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
    newMessageText: String
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;

        case APP_ACTIONS.UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload;
            return state;

        default:
            return state;
    }
}

export default dialogsReducer