import React from "react";
import style from './../Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/id' + props.id;
    return (
        <div className={style.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem