import Posts from "./PostsLayout/Posts";
import {connect} from "react-redux";
import {addPostCreator} from "../../../store/reducers/profile/profileReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createPost: (value) => {
            dispatch(addPostCreator(value));
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer