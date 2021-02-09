import React from "react";
import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import { sendMessageCreator, updateMessageBodyCreator} from '../../store/action';


const Dialogs = (props) => {

    const dialogsElements = props.dataDialog.dialogs.map(dData => <DialogItem name={dData.name} id={dData.id}/>);
    const messagesElement = props.dataDialog.messages.map(mData => <MessageItem message={mData.message} id={mData.id}/>)

    const sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }
    const onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateMessageBodyCreator(text))
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
                <textarea onChange={onMessageChange}
                          value={props.dataDialog.newMessageText}
                          placeholder='Write your new message'
                />
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs