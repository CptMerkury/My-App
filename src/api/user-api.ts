import {CommonResponseType, UserType} from "../store/types/@types";
import {instance} from "./instance-api";

type GetUserAPIType = {
    items: Array<UserType>,
    totalCount: number,
    error: null | string
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<GetUserAPIType>(`/users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    setFollow(id: number) {
        return instance
            .post<CommonResponseType>(`/follow/${id}`, null).then(res => res.data)
    },
    setUnfollow(id: number) {
        return instance
            .delete(`/follow/${id}`).then(res => res.data) as Promise<CommonResponseType>
    }
}
