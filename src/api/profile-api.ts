import {PhotosType, ProfileType,} from "../store/types/@types";
import {instance} from "./instance-api";
import {CommonResponseType} from "../store/types/@types";

type PhotosResponseDataType = {
    photos: PhotosType
}
export const profileAPI = {
    getProfile(id: number) {
        return instance
            .get<Array<ProfileType>>(`/profile/${id}`).then(res => res.data)
    },
    getStatusProfile(id: number) {
        return instance
            .get<string>(`/profile/status/${id}`).then(res => res.data)
    },
    setStatus(newStatus: string) {
        return instance
            .put<CommonResponseType>('/profile/status', {status: newStatus}).then(res => res.data)
    },
    savePhoto(file: File) {
        let formData = new FormData()
        formData.append('image', file)
        return instance
            .put<CommonResponseType<PhotosResponseDataType>>('/profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => res.data)
    },
    saveProfile(data: ProfileType) {
        return instance
            .put<CommonResponseType<ProfileType>>('/profile', data).then(res => res.data)
    }
}

