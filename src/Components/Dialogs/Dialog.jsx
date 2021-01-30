import React from "react";
import style from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/MessageItem'


const Dialogs = (props) => {

    const dialogsElements = props.dataDialog.dialogs.map(dData => <DialogItem name={dData.name} id={dData.id}/>);
    const messagesElement = props.dataDialog.messages.map(mData => <MessageItem message={mData.message} id={mData.id}/>)
    const newMessageElement = React.createRef()
    const newMessage = () => {
        props.addMessage();
    }
    const onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={style.dialogsContainer}>
            <h2>Massages</h2>
            <div className={style.dialogsField}>
                <div className={style.dialogs}>
                    <div className={style.dialogItem}>
                        {dialogsElements}
                    </div>
                </div>
                <div className={style.messages}>
                    <div className={style.messageItem}>
                        {messagesElement}
                    </div>
                </div>
            </div>
            <div className={style.textField}>
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={props.newMessageText}
                />
                <div>
                    <button onClick={newMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs