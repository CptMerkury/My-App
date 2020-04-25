import React from "react";
import Posts from "./Posts/Post";
import s from './MyPosts.module.css';


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you', likeCount: 50},
        {id: 2, message: 'It`s my first post', likeCount: 20},
    ]

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
            <div className={s.posts}>
                <Posts message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Posts message={postData[1].message} likeCount={postData[1].likeCount}/>
            </div>
        </div>
    );
}

export default MyPosts