import {UserType} from "../store/types/@types";
import usersReducer, {UserInitialStateType, usersActions} from "../store/reducers/users/usersReducer";

let state: UserInitialStateType;
beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: 'Max0', followed: false,
                photos: {small: null, large: null}, status: 'status0', location: {city: null, country: null}
            }, {
                id: 1, name: 'Max1', followed: false,
                photos: {small: null, large: null}, status: 'status1', location: {city: null, country: null}
            }, {
                id: 2, name: 'Max2', followed: true,
                photos: {small: null, large: null}, status: 'status2', location: {city: null, country: null}
            }, {
                id: 3, name: 'Max3', followed: true,
                photos: {small: null, large: null}, status: 'status3', location: {city: null, country: null}
            },
        ] as unknown as Array<UserType>,
        pageSize: 5,
        totalCount: 0,
        currentPage: 1,
        isLoading: false,
        isDisabledBtn: [],
    }
})

test('Follow success', () => {
    const newState = usersReducer(state, usersActions.follow(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})
test('Unfollow success', () => {
    const newState = usersReducer(state, usersActions.unfollow(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})