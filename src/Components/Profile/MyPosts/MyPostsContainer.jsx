import React from "react";
import {addPostCreator, updatePostBodyCreator} from "../../../store/action";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    const onCreatePost = () => {
        props.dispatch(addPostCreator());
    }

    const onChangeTextPost = (value) => {
        props.dispatch(updatePostBodyCreator(value));
    }

    return <MyPosts
        posts={props.posts}
        changeHandler={onChangeTextPost}
        createPost={onCreatePost}
        textPost={props.newPostText}
    />
}

export default MyPostsContainer