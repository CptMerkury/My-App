import * as axios from "axios";

export const getProfile = (id) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
}

export const getStatusProfile = (id) => {
    return axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`)
}
