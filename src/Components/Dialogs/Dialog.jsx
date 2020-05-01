import React from "react";
import s from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogsElements = props.dataDialog.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.dataDialog.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef()
    let newMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={newMessage}>Send message</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs