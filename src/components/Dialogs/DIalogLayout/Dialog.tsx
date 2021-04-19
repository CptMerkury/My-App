import React from "react";
import classes from '../Dialog.module.css'
import DialogItem from '../DialogItem/DialogItem'
import MessageItem from '../MessageItem/MessageItem'
import DialogReduxForm from "../DialogForm/DialogForm";
import {DialogType, MessageType} from "../../../store/types/@types";

type OwnPropsType= {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    createMessage: (val: string) => void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {

    const dialogsElements = props.dialogs.map(dData => <DialogItem name={dData.name} id={dData.id} key={dData.id}/>);
    const messagesElement = props.messages.map(mData => <MessageItem message={mData.message} id={mData.id} key={mData.id}/>)

    const addMessage = (value: {body: string}) => {
        props.createMessage(value.body);
    }

    return (
        <div className={classes.dialogsContainer}>
            <h2>Massages</h2>
            <div className={classes.dialogsField}>
                <div className={classes.dialogs}>
                    <div className={classes.dialogItem}>
                        {dialogsElements}
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.messageItem}>
                        {messagesElement}
                    </div>
                </div>
            </div>
            <div className={classes.textField}>
                <DialogReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
};

export default Dialogs