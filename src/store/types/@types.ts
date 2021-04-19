import {ResultCodesEnum} from "../../api/instance-api";
import {AppStateType} from "../store";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";

//API Types
export type CommonResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
//ThunkCreator Types
export type CommonThunkCreatorType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
//Profile Types
export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsType | null
    photos: PhotosType | null
}
//Dialogs Types
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
//Users Types
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    location: {
        city: string
        country: string
    }
}

