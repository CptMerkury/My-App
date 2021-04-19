import React from "react";
import classes from '../Dialog.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../store/types/@types";

const DialogItem = (props: DialogType) => {
    let path = '/dialogs/id' + props.id;
    return (
        <div className={classes.dialogItem}>
            <NavLink to={path}>
                <img
                    src='https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
                    alt="avatar"/>
                {props.name}</NavLink>
        </div>
    )
};

export default DialogItem