import {SEND_MESSAGE} from "../../actions/actions";
import {DialogType, MessageType} from "../../types/@types";
import {InferActionsType} from "../../store";

const initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Dmitri'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Vladimir'},
        {id: 5, name: 'Andrew'},
    ] as Array<DialogType>,
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
    ] as Array<MessageType>,
};

export type DialogInitialStateType = typeof initialState;

export type DialogActionsTypes = InferActionsType<typeof dialogActions>

const dialogsReducer = (state = initialState, action: DialogActionsTypes): DialogInitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: action.payload
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
}
export const dialogActions = {
    sendMessageCreator : (value: string) => ({type: SEND_MESSAGE, payload: value} as const),
}

export default dialogsReducer
