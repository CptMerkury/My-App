import {addPostCreator} from "../../../store/reducers/profile/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textPost: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createPost: (value) => {
            dispatch(addPostCreator(value));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer