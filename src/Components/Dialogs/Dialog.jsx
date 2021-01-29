import React from "react";
import style from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogsElements = props.dataDialog.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.dataDialog.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef()
    let newMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={style.dialogsContainer}>
            <div className={style.dialogField}>
                <div className={style.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElement}
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