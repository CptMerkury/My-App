import {
    ADD_POST,
    DELETE_POST,
    GET_STATUS,
    IS_PROFILE_FETCHING,
    IS_STATUS_FETCHING,
    SET_PHOTO_SUCCESS,
    SET_PROFILE_DATA
} from "../../actions/actions";
import {PhotosType, PostsType, ProfileType} from "../../Types/@types";

const initialState = {
    profile: [] as Array<ProfileType> | null,
    status: '',
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 50},
        {id: 2, message: 'It`s my first post', likeCount: 40},
        {id: 3, message: 'Hi, how are you', likeCount: 30},
        {id: 4, message: 'How are you', likeCount: 20},
        {id: 5, message: 'Hi', likeCount: 10},
    ] as Array<PostsType>,
    isLoading: false,
    isFetchingStatus: false,
};

export type ProfileInitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload)
            };
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.payload
            };
        case GET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case IS_PROFILE_FETCHING:
            return {
                ...state,
                isLoading: action.payload
            };
        case IS_STATUS_FETCHING:
            return {
                ...state,
                isFetchingStatus: action.payload
            };
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.payload} as Array<ProfileType>
                /* Refactoring later action type for this case */
            };
        default:
            return state
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    payload: PostsType
}
export const addPostCreator = (value: PostsType): AddPostActionType => ({
    type: ADD_POST,
    payload: value
})

type DeletePostActionType = {
    type: typeof DELETE_POST
    payload: number
}
export const deletePostCreator = (id: number): DeletePostActionType => ({
    type: DELETE_POST,
    payload: id
})

type SetProfileDataActionType = {
    type: typeof SET_PROFILE_DATA
    payload: ProfileType
}
export const setProfileData = (data: ProfileType): SetProfileDataActionType => ({
    type: SET_PROFILE_DATA,
    payload: data
})

type GetStatusActionType = {
    type: typeof GET_STATUS
    payload: string
}
export const getStatus = (value: string): GetStatusActionType => ({
    type: GET_STATUS,
    payload: value
})

type SetPhotosActionType = {
    type: typeof SET_PHOTO_SUCCESS
    payload: PhotosType
}
export const setPhotoSuccess = (photos: PhotosType): SetPhotosActionType => ({
    type: SET_PHOTO_SUCCESS,
    payload: photos
})

type ToggleActionType = {
    type: typeof IS_PROFILE_FETCHING
    payload: boolean
}
export const toggleFetch = (bool: boolean): ToggleActionType => ({
    type: IS_PROFILE_FETCHING,
    payload: bool
})

type ToggleStatusActionType = {
    type: typeof IS_STATUS_FETCHING
    payload: boolean
}
export const toggleFetchStatus = (bool: boolean): ToggleStatusActionType => ({
    type: IS_STATUS_FETCHING,
    payload: bool
})

export default profileReducer