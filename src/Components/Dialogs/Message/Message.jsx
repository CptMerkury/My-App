import React from "react";
import style from './../Dialog.module.css'

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
};

export default Message