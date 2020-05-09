import React from "react";
import Posts from "./Posts/Post";
import s from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElemenet = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)
    let newPostsElement = React.createRef()
    let newPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <p>My posts</p>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostsElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={newPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElemenet}
            </div>
        </div>
    );
}

export default MyPosts