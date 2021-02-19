import {instance} from "./instance";

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    setFollow(id) {
        //Для POST запросов объект withCredentials нужно передавать 3-м параметром как и в PUT методе,
        // но так как мы создали instance, мы его уже не передаем
        return instance.post(`/follow/${id}`, null)
            .then(response => {
                return response.data
            })
    },
    setUnfollow(id) {
        //Для DELETE запросов объект withCredentials нужно передавать 2-м параметром как и в GET методе,
        // но так как мы создали instance, мы его уже не передаем
        return instance
            .delete(`/follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getPage(num, pageSize) {
        return instance
            .get(`/users?page=${num}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance
            .get(`/profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getStatusProfile(id) {
        return instance
            .get(`/profile/status/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    checkAuth() {
        return instance
            .get('/auth/me')
            .then(response => {
                return response.data
            })
    }
}