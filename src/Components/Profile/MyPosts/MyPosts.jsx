import React from "react";
import Posts from "./Posts/Post";
import s from './MyPosts.module.css';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                <Posts message='Hi, how are you' likeCount='50'/>
                <Posts message='It`s my first post' likeCount='20'/>
            </div>
        </div>
    );
}

export default MyPosts