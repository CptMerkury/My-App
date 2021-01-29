import React from "react";
import s from './Dialog.module.css'
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
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={props.newMessageText}
                />
                </div>
                <div>
                    <button onClick={newMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs