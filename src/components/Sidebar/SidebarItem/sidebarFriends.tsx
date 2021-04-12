import React from "react";
import classes from '../Sidebar.module.css';

type PropsType = {
    name: string
}

const SidebarFriends: React.FC<PropsType> = ({name}) => {
    return (
        <div className={classes.item}>
            <img
                src='https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
                alt="avatar" />
            <p>{name}</p>
        </div>
    )
}

export default SidebarFriends
