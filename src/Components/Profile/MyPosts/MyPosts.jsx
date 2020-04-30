import React from "react";
import Posts from "./Posts/Post";
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElemenet = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)

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