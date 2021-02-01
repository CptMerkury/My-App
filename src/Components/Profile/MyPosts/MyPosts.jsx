import React from "react";
import Posts from "./Posts/Post";
import classes from './MyPosts.module.css';


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Posts message={p.message} likeCount={p.likeCount}/>)
    let newPostsElement = React.createRef()
    let newPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postField}>
            <h3>My posts</h3>
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
            <div className={classes.postsBlock}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts