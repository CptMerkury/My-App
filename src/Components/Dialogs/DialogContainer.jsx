import React from "react";
import {sendMessageCreator, updateMessageBodyCreator} from '../../store/action';
import Dialog from "./Dialog";


const DialogsContainer = (props) => {

    const sendNewMessage = () => {
        props.dispatch(sendMessageCreator());
    }
    const onMessageTextChange = (value) => {
        props.dispatch(updateMessageBodyCreator(value))
    }

    return <Dialog
        dataDialog={props.dataDialog}
        textMessage={props.dataDialog.newMessageText}
        createMessage={sendNewMessage}
        changeHandler={onMessageTextChange}
    />
};

export default DialogsContainer