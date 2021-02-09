import {APP_ACTIONS} from "./action";

const dialogsReducer = (state, action) => {
    if (action.type === APP_ACTIONS.SEND_MESSAGE) {
        let newMessage = {
            id: state.messages.length + 1,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = '';
    } else if (action.type === APP_ACTIONS.UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.payload;
    }
    return state
}

export default dialogsReducer