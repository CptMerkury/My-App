import React from "react";
import style from './../Dialog.module.css'

const MessageItem = (props) => {
    return (
        <div className={style.messageItem}>{props.message}</div>
    )
};

export default MessageItem