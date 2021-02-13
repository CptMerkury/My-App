import {APP_ACTIONS} from "./action";

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            name: 'Dmitriy',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'IT-KAMASUTRA!!!',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            followed: false,
            name: 'Max',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'Learning...',
            location: {country: 'Russia', city: 'Kazan'}
        },
        {
            id: 3,
            followed: true,
            name: 'Den',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'Changed World!!!',
            location: {country: 'Latvia', city: 'Riga'}
        },
        {
            id: 4,
            followed: true,
            name: 'Vadim',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: 'Created Game!!!',
            location: {country: 'Russia', city: 'Kazan'}
        },
        {
            id: 5,
            followed: false,
            name: 'Tomas',
            photos: {
                large: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
                small: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'
            },
            status: '...',
            location: {country: 'USA', city: 'New-York'}
        }
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

