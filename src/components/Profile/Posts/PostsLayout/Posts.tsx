import React from "react";
import classes from '../Posts.module.css';
import PostReduxForm from "../PostsForm/PostForm";
import Post from "../PostsItem/Post";
import {PostsType} from "../../../../store/types/@types";

type PropsType = {
    posts: Array<PostsType>
    createPost: (val: string) => void
}

/* Мы используем memo, чтобы не происходило лишних отрисовок если пропсы не поменялись */
const Posts: React.FC<PropsType> = React.memo((props) => {
    /* Мы используем reverse к копии массива постов, так как этот метод мутирующего типа */
    const postsElement = [...props.posts].reverse().map(pData => <Post message={pData.message}
                                                                       likeCount={pData.likeCount}
                                                                       key={pData.id}/>)

    const addPost = (value: { body:string }) => {
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

export default Posts