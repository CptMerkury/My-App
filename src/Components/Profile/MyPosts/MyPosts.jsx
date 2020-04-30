import React from "react";
import Posts from "./Posts/Post";
import s from './MyPosts.module.css';


const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you', likeCount: 50},
        {id: 2, message: 'It`s my first post', likeCount: 20},
        {id: 3, message: 'Hi, how are you', likeCount: 10},
        {id: 4, message: 'How are you', likeCount: 5},
        {id: 5, message: 'Hi', likeCount: 50},
        {id: 6, message: 'Hello, anime!!!', likeCount: 40},
    ]
    let postsElemenet = posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)

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
                {postsElemenet}
            </div>
        </div>
    );
}

export default MyPosts