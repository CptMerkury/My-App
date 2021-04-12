import {instance, ResultCodeForCaptchaCEnum, ResultCodesEnum} from "./instance-api";
import {ResponseType} from "../store/types/@types";

type MeResponseDataType = {
    id: number,
    email: string,
    login: string,
}
type SignupResponseDataType = {
    userId: number,
}
type CaptchaAPIType = {
    url: string
}

export const authAPI = {
    checkAuth() {
        return instance
            .get<ResponseType<MeResponseDataType>>('/auth/me')
            .then(response => response.data)
    },
    signOut() {
        return instance
            .delete<ResponseType>('/auth/login')
            .then(response => response.data)
    },
    signIn(email: string, password: string, rememberMe = false, captcha = false) {
        return instance
            .post<ResponseType<SignupResponseDataType, ResultCodesEnum | ResultCodeForCaptchaCEnum>>('/auth/login',
                {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    getCaptcha() {
        return instance
            .get<CaptchaAPIType>('/security/get-captcha-url')
            .then(response => response.data)
    }
}
