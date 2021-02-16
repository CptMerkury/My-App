import {addPostCreator, updatePostBodyCreator} from "../../../store(BLL)/reducers/profile/profileReducer";
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