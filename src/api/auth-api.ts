import {instance, ResultCodeForCaptchaCEnum, ResultCodesEnum} from "./instance-api";
import {CommonResponseType} from "../store/types/@types";

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
            .get<CommonResponseType<MeResponseDataType>>('/auth/me').then(res => res.data)
    },
    signOut() {
        return instance
            .delete<CommonResponseType>('/auth/login').then(res => res.data)
    },
    signIn(email: string, password: string, rememberMe = false, captcha = false) {
        return instance
            .post<CommonResponseType<SignupResponseDataType, ResultCodesEnum | ResultCodeForCaptchaCEnum>>('/auth/login',
                {email, password, rememberMe, captcha}).then(res => res.data)
    },
    getCaptcha() {
        return instance
            .get<CaptchaAPIType>('/security/get-captcha-url').then(res => res.data)
    }
}
