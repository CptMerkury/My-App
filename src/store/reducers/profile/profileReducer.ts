import {PhotosType, PostsType, ProfileType} from "../../types/@types";
import {InferActionsType} from "../../store";
import {
    ADD_POST,
    DELETE_POST,
    GET_STATUS,
    IS_PROFILE_FETCHING,
    IS_STATUS_FETCHING,
    SET_PHOTO_SUCCESS,
    SET_PROFILE_DATA
} from "../../actions/actions";

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
export type ProfileActionsTypes = InferActionsType<typeof profileActions>

const profileReducer = (state = initialState, action: ProfileActionsTypes): ProfileInitialStateType => {
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

export const profileActions = {
    addPostCreator: (value: string) => ({
        type: ADD_POST,
        payload: value
    } as const),

    deletePostCreator: (id: number) => ({
        type: DELETE_POST,
        payload: id
    } as const),

    setProfileData: (data: Array<ProfileType>) => ({
        type: SET_PROFILE_DATA,
        payload: data
    } as const),

    getStatus: (value: string) => ({
        type: GET_STATUS,
        payload: value
    } as const),

    setPhotoSuccess: (photos: PhotosType) => ({
        type: SET_PHOTO_SUCCESS,
        payload: photos
    } as const),

    toggleFetch: (bool: boolean) => ({
        type: IS_PROFILE_FETCHING,
        payload: bool
    } as const),

    toggleFetchStatus: (bool: boolean) => ({
        type: IS_STATUS_FETCHING,
        payload: bool
    } as const)
}

export default profileReducer
