import {ResultCodesEnum} from "../../api/instance-api";

//API Types
export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

//ProfileTypes
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
//DialogsTypes
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
//UsersTypes
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

