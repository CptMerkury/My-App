import {APP_ACTIONS} from "../../actions/action";

let initialState = {
    profile: [],
    status: '',
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 50},
        {id: 2, message: 'It`s my first post', likeCount: 40},
        {id: 3, message: 'Hi, how are you', likeCount: 30},
        {id: 4, message: 'How are you', likeCount: 20},
        {id: 5, message: 'Hi', likeCount: 10},
    ],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case APP_ACTIONS.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            };
        case APP_ACTIONS.SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.payload
            };
        case APP_ACTIONS.GET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state
    }
}

export const addPostCreator = (value) => ({
    type: APP_ACTIONS.ADD_POST,
    payload: value
})

export const deletePostCreator = (id) => ({
    type: APP_ACTIONS.DELETE_POST,
    payload: id
})

export const setProfileData = (data) => ({
    type: APP_ACTIONS.SET_PROFILE_DATA,
    payload: data
})
export const getStatus = (value) => ({
    type: APP_ACTIONS.GET_STATUS,
    payload: value
})

export default profileReducer