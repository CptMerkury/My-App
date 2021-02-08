import React from "react";
import Posts from "./Posts/Post";
import classes from './MyPosts.module.css';


const MyPosts = (props) => {

    const postsElement = props.posts.map(pData => <Posts message={pData.message} likeCount={pData.likeCount}/>)
    const newPostsElement = React.createRef()
    const newPost = () => {
        props.dispatch({
            type: 'ADD_POST'
        });
    }
    const onPostChange = () => {
        let text = newPostsElement.current.value;
        props.dispatch({
            type: 'UPDATE_NEW_POST_TEXT',
            payload: text});
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