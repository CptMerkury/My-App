// import React from "react";
import {addPostCreator, updatePostBodyCreator} from "../../../store/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState().profilePage;
//
//     const onCreatePost = () => {
//         props.store.dispatch(addPostCreator());
//     }
//
//     const onChangeTextPost = (value) => {
//         props.store.dispatch(updatePostBodyCreator(value));
//     }
//
//     return <MyPosts
//         posts={state.posts}
//         textPost={state.newPostText}
//         changeHandler={onChangeTextPost}
//         createPost={onCreatePost}
//
//     />
// }
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textPost: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createPost: () => {
            dispatch(addPostCreator());
        },
        changeHandler: (value) => {
            dispatch(updatePostBodyCreator(value));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer