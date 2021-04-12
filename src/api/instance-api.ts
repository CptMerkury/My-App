import axios from "axios";

//Enum Result Codes
export enum ResultCodesEnum {
    SUCCESS = 0,
    ERROR = 1,
}
export enum ResultCodeForCaptchaCEnum {
    ANTI_BOT = 10,
}

/* Мы создаем instance axios.create, чтобы один раз прописать в него параметры и не дублировать их в каждом запросе */
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        /* мы добавляем в headers api-key, чтобы сервер мог понять кто обращается к серверу. */
        'API-KEY': 'a2f60dbc-59e4-4c2c-b4c3-fa8b69b0306e'
    }
})
