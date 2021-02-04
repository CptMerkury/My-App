import React from "react";
import classes from '../Sidebar.module.css';

const FriendBar = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
                alt="avatar" />
            <p>{props.name}</p>
        </div>
    )
}

export default FriendBar