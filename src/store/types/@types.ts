//Enum Result Codes
export enum ResultCodesEnum {
    SUCCESS = 0,
    ERROR = 1,
}
export enum ResultCodeForCaptchaCEnum {
    ANTI_BOT = 10,
}
// Auth
export type CheckAuthAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: {
        id: number,
        email: string,
        login: string,
    }
}
export type SignInAPIType = {
    resultCode: ResultCodesEnum | ResultCodeForCaptchaCEnum
    messages: Array<string>,
    data: {
        userId: number,
    }
}
export type SignOutAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: null
}
export type CaptchaAPIType = {
    url: string
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

export type GetProfileAPIType = Array<ProfileType>
export type SetStatusAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: null
}
export type SetPhotoAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: {
        photos: PhotosType
    }
}
export type SetProfileAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: ProfileType
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

export type GetUserAPIType = {
    items: Array<UserType>,
    totalCount: number,
    error: null | string
}
export type FollowUnfollowApiType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: null
}
