import React from "react";
import Posts from "./Posts/Post";
import classes from './MyPosts.module.css';
import PostReduxForm from "./PostForm";

const MyPosts = React.memo((props) => {

    // Мы используем reverse к копии массива постов, так как этот метод мутирующего типа
    const postsElement = [...props.posts].reverse().map(pData => <Posts message={pData.message}
                                                                        likeCount={pData.likeCount}
                                                                        key={pData.id}/>)

    const addPost = (value) => {
        props.createPost(value.body)
    }

    return (
        <div className={classes.postField}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={addPost}/>
            </div>
            <div className={classes.postsBlock}>
                {postsElement}
            </div>
        </div>
    );
})

export default MyPosts