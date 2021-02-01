import classes from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
                alt="avatar"/>
            <p>{props.message}</p>
            <div className={classes.like}>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;