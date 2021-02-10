// import React from "react";
import {sendMessageCreator, updateMessageBodyCreator} from '../../store/dialogsReducer';
import Dialog from "./Dialog";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogPage;
//
//     const sendNewMessage = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//     const onMessageTextChange = (value) => {
//         props.store.dispatch(updateMessageBodyCreator(value))
//     }
//
//     return <Dialog
//         dialogs={state.dialogs}
//         messages={state.messages}
//         textMessage={state.newMessageText}
//         createMessage={sendNewMessage}
//         changeHandler={onMessageTextChange}
//     />
// };

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        textMessage: state.dialogPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: () => {
            dispatch(sendMessageCreator());
        },
        changeHandler: (value) => {
            dispatch(updateMessageBodyCreator(value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog)

export default DialogsContainer