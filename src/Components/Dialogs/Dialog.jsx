import React from "react";
import classes from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import {addNewMessage, changeMessageTextarea} from '../../Redux/app/action';


const Dialogs = (props) => {

    const dialogsElements = props.dataDialog.dialogs.map(dData => <DialogItem name={dData.name} id={dData.id}/>);
    const messagesElement = props.dataDialog.messages.map(mData => <MessageItem message={mData.message} id={mData.id}/>)
    const newMessageElement = React.createRef()

    const addMessage = () => {
        props.dispatch(addNewMessage());
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(changeMessageTextarea(text))
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
                          ref={newMessageElement}
                          value={props.newMessageText}
                          placeholder='Write your new message'
                />
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs