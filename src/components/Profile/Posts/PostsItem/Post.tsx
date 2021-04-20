import classes from "./Post.module.css";
import React from "react";

type PropsType = {
    message: string
    likeCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.ava_wrapper}>
                <img className={classes.ava_item}
                    src='https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
                    alt="avatar"/>
            </div>
            <div className={classes.body_wrapper}>
                <p className={classes.post_body_item}>{props.message}</p>
            </div>
            <div className={classes.like_wrapper}>
                <div className={classes.like_item}>likes {props.likeCount}</div>
            </div>
        </div>
    );
}

export default Post;