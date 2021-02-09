import React from "react";
import Posts from "./Posts/Post";
import classes from './MyPosts.module.css';
import {addPostCreator, updatePostBodyCreator} from "../../../store/action";


const MyPosts = (props) => {

    const postsElement = props.posts.map(pData => <Posts message={pData.message} likeCount={pData.likeCount}/>)
    const addPost = () => {
        props.dispatch(addPostCreator());
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostBodyCreator(text));
    }

    return (
        <div className={classes.postField}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
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