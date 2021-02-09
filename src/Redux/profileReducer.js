import {APP_ACTIONS} from "./action";

const profileReducer = (state, action) => {
    if (action.type === APP_ACTIONS.ADD_POST) {
        let newPost = {
            id: state.posts.length + 1,
            message: state.newPostText,
            likeCount: 0
        };
        state.posts.unshift(newPost);
        state.newPostText = '';

    } else if (action.type === APP_ACTIONS.UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.payload;
    }
    return state
}

export default profileReducer