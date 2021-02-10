import React from "react";
import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(dData => <DialogItem name={dData.name} id={dData.id} key={dData.id}/>);
    const messagesElement = props.messages.map(mData => <MessageItem message={mData.message} id={mData.id} key={mData.id}/>)
    const sendMessage = () => {
        props.createMessage();
    }
    const onMessageChange = (e) => {
        let text = e.target.value
        props.changeHandler(text)
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
                          value={props.textMessage}
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