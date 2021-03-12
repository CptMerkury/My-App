import {PROFILE_ACTIONS} from "../../actions/actions";

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
    isLoading: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTIONS.ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case PROFILE_ACTIONS.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            };
        case PROFILE_ACTIONS.SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.payload
            };
        case PROFILE_ACTIONS.GET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case PROFILE_ACTIONS.IS_FETCHING:
            return {
                ...state,
                isLoading: action.payload
            };
        case PROFILE_ACTIONS.SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}
            };
        default:
            return state
    }
}

export const addPostCreator = (value) => ({
    type: PROFILE_ACTIONS.ADD_POST,
    payload: value
})

export const deletePostCreator = (id) => ({
    type: PROFILE_ACTIONS.DELETE_POST,
    payload: id
})

export const setProfileData = (data) => ({
    type: PROFILE_ACTIONS.SET_PROFILE_DATA,
    payload: data
})
export const getStatus = (value) => ({
    type: PROFILE_ACTIONS.GET_STATUS,
    payload: value
})
export const setPhotoSuccess = (photos) => ({
    type: PROFILE_ACTIONS.SET_PHOTO_SUCCESS,
    payload: photos
})
export const toggleFetch = (bool) => ({
    type: PROFILE_ACTIONS.IS_FETCHING,
    payload: bool
})

export default profileReducer