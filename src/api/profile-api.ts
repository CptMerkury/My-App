import {PhotosType, ProfileType,} from "../store/types/@types";
import {instance} from "./instance-api";
import {ResponseType} from "../store/types/@types";

type PhotosResponseDataType = {
    photos: PhotosType
}
export const profileAPI = {
    getProfile(id: number) {
        return instance
            .get<Array<ProfileType>>(`/profile/${id}`)
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
            .put<ResponseType>('/profile/status', {status: newStatus})
    },
    savePhoto(file: Blob) {
        let formData = new FormData()
        formData.append('image', file)
        return instance
            .put<ResponseType<PhotosResponseDataType>>('/profile/photo', formData, {
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
            .put<ResponseType<ProfileType>>('/profile', data)
            .then(response => {
                return response.data
            })
    }
}

