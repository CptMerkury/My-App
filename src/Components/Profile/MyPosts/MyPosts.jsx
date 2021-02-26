import React from "react";
import Posts from "./Posts/Post";
import classes from './MyPosts.module.css';
import PostField from "./PostForm";

const MyPosts = (props) => {
    const postsElement = props.posts.map(pData => <Posts message={pData.message} likeCount={pData.likeCount} key={pData.id}/>)

    const addPost = () => {
        props.createPost()
    }

    const onPostChange = (value) => {
        props.changeHandler(value)
    }

    return (
        <div className={classes.postField}>
            <h3>My posts</h3>
            <div>
                <PostField setText={onPostChange} addPost={addPost}/>
            </div>
            <div className={classes.postsBlock}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts