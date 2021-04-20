import Posts from "./PostsLayout/Posts";
import {connect} from "react-redux";
import {profileActions} from "../../../store/reducers/profile/profileReducer";
import {AppStateType} from "../../../store/store";
import React from "react";
import {PostsType} from "../../../store/types/@types";

export type MapStateToProps = {
    posts: Array<PostsType>
}
export type MapDispatchToProps = {
    createPost: (val: string) => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

const PostsContainer: React.FC = connect<MapStateToProps, MapDispatchToProps, any, AppStateType>(mapStateToProps, {
    createPost: profileActions.addPostCreator
})(Posts);

export default PostsContainer
