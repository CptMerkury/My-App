import React from "react";
import {sendMessageCreator, updateMessageBodyCreator} from '../../store/dialogsReducer';
import Dialog from "./Dialog";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    const sendNewMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    const onMessageTextChange = (value) => {
        props.store.dispatch(updateMessageBodyCreator(value))
    }

    return <Dialog
        dialogs={state.dialogs}
        messages={state.messages}
        textMessage={state.newMessageText}
        createMessage={sendNewMessage}
        changeHandler={onMessageTextChange}
    />
};

export default DialogsContainer