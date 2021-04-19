import React from "react";
import classes from '../Dialog.module.css'
import {MessageType} from "../../../store/types/@types";

const MessageItem = (props: MessageType) => {
    return (
        <div className={classes.messageItem}>{props.message}</div>
    )
};

export default MessageItem