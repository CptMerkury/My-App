import {instance} from "./instance";
import {PhotosType, ProfileType, UserType,} from "../store/types/@types";

//Enum Result Codes
export enum ResultCodesEnum {
    SUCCESS = 0,
    ERROR = 1,
}

export enum ResultCodeForCaptchaCEnum {
    ANTI_BOT = 10,
}

type GetUserAPIType = {
    items: Array<UserType>,
    totalCount: number,
    error: null | string
}
type FollowUnfollowApiType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: null
}
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetUserAPIType>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    setFollow(id: number) {
        /*
         * Для POST запросов объект withCredentials нужно передавать 3-м параметром как и в PUT методе,
         *  но так как мы создали instance, мы его уже не передаем
         */
        return instance
            .post<FollowUnfollowApiType>(`/follow/${id}`, null)
            .then(response => {
                return response.data
            })
    },
    setUnfollow(id: number) {
        /*
         * Для DELETE запросов объект withCredentials нужно передавать 2-м параметром как и в GET методе,
         * но так как мы создали instance, мы его уже не передаем
         */
        return instance
            .delete<FollowUnfollowApiType>(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

type GetProfileAPIType = Array<ProfileType>
type SetStatusAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: null
}
type SetPhotoAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: {
        photos: PhotosType
    }
}
type SetProfileAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: ProfileType
}
export const profileAPI = {
    getProfile(id: number) {
        return instance
            .get<GetProfileAPIType>(`/profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getStatusProfile(id: number) {
        return instance
            .get<string>(`/profile/status/${id}`)
            .then(response => {
                return response.data
            })
    },
    setStatus(newStatus: string) {
        return instance
            .put<SetStatusAPIType>('/profile/status', {status: newStatus})
    },
    savePhoto(file: Blob) {
        let formData = new FormData()
        formData.append('image', file)
        return instance
            .put<SetPhotoAPIType>('/profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                return response.data
            })
    },
    saveProfile(data: ProfileType) {
        return instance
            .put<SetProfileAPIType>('/profile', data)
            .then(response => {
                return response.data
            })
    }
}

type CheckAuthAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: {
        id: number,
        email: string,
        login: string,
    }
}
type SignInAPIType = {
    resultCode: ResultCodesEnum | ResultCodeForCaptchaCEnum
    messages: Array<string>,
    data: {
        userId: number,
    }
}
type SignOutAPIType = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: null
}
type CaptchaAPIType = {
    url: string
}
export const authAPI = {
    checkAuth() {
        return instance
            .get<CheckAuthAPIType>('/auth/me')
            .then(response => response.data)
    },
    signOut() {
        return instance
            .delete<SignOutAPIType>('/auth/login')
            .then(response => response.data)
    },
    signIn(email: string, password: string, rememberMe = false, captcha = false) {
        return instance
            .post<SignInAPIType>('/auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    getCaptcha() {
        return instance
            .get<CaptchaAPIType>('/security/get-captcha-url')
            .then(response => response.data)
    }
}