import {APP_ACTIONS} from "./action";

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            name: 'Dmitriy',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'It-kamasutra!!!!',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            followed: true,
            name: 'Max',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'On Job!',
            location: {country: 'Russia', city: 'Kazan'}
        },
        {
            id: 3,
            followed: false,
            name: 'Artem',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'COOOOOOL!!!',
            location: {country: 'Russia', city: 'Saints-Petersburg'}
        },
        {
            id: 4,
            followed: false,
            name: 'Tom',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: '...',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: 5,
            followed: false,
            name: 'Ivan',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'Hi!',
            location: {country: 'Russia', city: 'Moscow'}
        },
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        case APP_ACTIONS.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        case APP_ACTIONS.SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            };
        default:
            return state
    }
}
export const followAC = (userID) => ({
    type: APP_ACTIONS.FOLLOW,
    payload: userID
})
export const unfollowAC = (userID) => ({
    type: APP_ACTIONS.UNFOLLOW,
    payload: userID
})

export const setUsersAC = (users) => ({
    type: APP_ACTIONS.SET_USERS,
    payload: users
})

export default usersReducer

