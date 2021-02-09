import React from "react";
import Posts from "./Posts/Post";
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    const postsElement = props.posts.map(pData => <Posts message={pData.message} likeCount={pData.likeCount}/>)

    const addPost = () => {
        props.createPost()
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        props.changeHandler(text)
    }

    return (
        <div className={classes.postField}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.textPost}
                              placeholder='Add your new post'/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.postsBlock}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts