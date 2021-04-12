import {UserType} from "../store/types/@types";
import {instance} from "./instance-api";

type GetUserAPIType = {
    items: Array<UserType>,
    totalCount: number,
    error: null | string
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
        return instance
            .post<ResponseType>(`/follow/${id}`, null)
            .then(response => {
                return response.data
            })
    },
    setUnfollow(id: number) {
        return instance
            .delete<ResponseType>(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}
