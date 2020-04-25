import React from "react";
import Posts from "./Posts/Post";
import s from './MyPosts.module.css';


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <p>My posts</p>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                <Posts message='Hi, how are you' likeCount='50'/>
                <Posts message='It`s my first post' likeCount='20'/>
            </div>
        </div>
    );
}

export default MyPosts