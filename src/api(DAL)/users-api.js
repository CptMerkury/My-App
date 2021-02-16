import * as axios from "axios";

export const getUsers = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
}

export const setFollow = (id) => {
    //Для POST запросов объект withCredentials нужно передавать 3-м параметром как и в PUT методе
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
        withCredentials: true,
        headers: {
            //мы добавляем в headers api-key, чтобы сервер мог понять кто обращается к серверу.
            'API-KEY': '3a48cb66-64d9-4e3b-a80f-5d88883726bc'
        }
    })
}
export const setUnfollow = (id) => {
    //Для DELETE запросов объект withCredentials нужно передавать 2-м параметром как и в GET методе
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': '3a48cb66-64d9-4e3b-a80f-5d88883726bc'
        }
    })
}

export const getPage = (num, pageSize) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${pageSize}`, {
            withCredentials: true
        })
}

