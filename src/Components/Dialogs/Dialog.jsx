import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialog = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Ivan' id='1'/>
                <DialogItem name='Dima' id='2'/>
                <DialogItem name='Max' id='3'/>
                <DialogItem name='Vova' id='4'/>
                <DialogItem name='Andrey' id='5'/>
                <DialogItem name='Vika' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='What`s Up'/>
                <Message message='How are you'/>
                <Message message='Hello'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
};

export default Dialog