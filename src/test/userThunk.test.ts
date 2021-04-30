import {setFollowThunkCreator, setUnfollowThunkCreator} from "../store/thunk/users/usersThunk";
import {usersAPI} from "../api/user-api";
import {usersActions} from "../store/reducers/users/usersReducer";
import {CommonResponseType} from "../store/types/@types";
import {ResultCodesEnum} from "../api/instance-api";

jest.mock('../api/user-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStateMock.mockClear();
    userAPIMock.setFollow.mockClear();
    userAPIMock.setUnfollow.mockClear();
})


const result: CommonResponseType = {
    resultCode: ResultCodesEnum.SUCCESS,
    messages: [],
    data: {}
}

userAPIMock.setFollow.mockReturnValue(Promise.resolve(result));
userAPIMock.setUnfollow.mockReturnValue(Promise.resolve(result));

test('success follow thunk', async () => {
    const thunk = setFollowThunkCreator(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleDisabledBtn(true,  1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.follow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleDisabledBtn(false, 1))
})

test('success unfollow thunk', async () => {
    const thunk = setUnfollowThunkCreator(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleDisabledBtn(true,  1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.unfollow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleDisabledBtn(false, 1))
})