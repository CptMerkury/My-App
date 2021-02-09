import React from "react";
import {addPostCreator, updatePostBodyCreator} from "../../../store/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    const onCreatePost = () => {
        props.store.dispatch(addPostCreator());
    }

    const onChangeTextPost = (value) => {
        props.store.dispatch(updatePostBodyCreator(value));
    }

    return <MyPosts
        posts={state.posts}
        textPost={state.newPostText}
        changeHandler={onChangeTextPost}
        createPost={onCreatePost}

    />
}

export default MyPostsContainer