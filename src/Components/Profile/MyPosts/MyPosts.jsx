import React from "react";
import Posts from "./Posts/Post";
import classes from './MyPosts.module.css';
import {addNewPost, changePostTextarea} from "../../../Redux/app/action";


const MyPosts = (props) => {

    const postsElement = props.posts.map(pData => <Posts message={pData.message} likeCount={pData.likeCount}/>)
    const newPostsElement = React.createRef()

    const addPost = () => {
        props.dispatch(addNewPost());
    }

    const onPostChange = () => {
        let text = newPostsElement.current.value;
        props.dispatch(changePostTextarea(text));
    }

    return (
        <div className={classes.postField}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostsElement}
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