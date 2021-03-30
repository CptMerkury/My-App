import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";

import Users from "./UsersLayout/Users";
import {
    getPageThunkCreator, getUsersThunkCreator,
    setFollowThunkCreator, setUnfollowThunkCreator
} from "../../store/thunk/users/usersThunk";
import {
    checkLoadingSelector, getCurrantPageSelector, getPageSizeSelector,
    getUsersLengthSelector, getUsersSelector, isUnUseBtnSelector
} from "../../store/selectors/users/usersSelectors";
import {UserType} from "../../store/types/@types";
import {AppStateType} from "../../store/store";

type MapStateToPropsType = {
    usersPage: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    isLoading: boolean
    isDisabledBtn: Array<number>
}
type MapDispatchToPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    getPageThunkCreator: (num: number, pageSize: number) => void
    setFollowThunkCreator: (id: number) => void
    setUnfollowThunkCreator: (id: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize)
    }

    setFollowHandler = (id: number) => {
        /* Мы перенесли всю логику в thunkCreator */
        this.props.setFollowThunkCreator(id)
    }
    setUnfollowHandler = (id: number) => {
        this.props.setUnfollowThunkCreator(id)
    }
    selectPage = (num: number) => {
        const {pageSize} = this.props
        this.props.getPageThunkCreator(num, pageSize)
    }

    render() {
        return (
            <Users
                usersPage={this.props.usersPage}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                isLoading={this.props.isLoading}
                isDisabled={this.props.isDisabledBtn}

                selectPage={(num) => this.selectPage(num)}
                setFollowHandler={(id) => this.setFollowHandler(id)}
                setUnfollowHandler={(id) => this.setUnfollowHandler(id)}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalCount: getUsersLengthSelector(state),
        currentPage: getCurrantPageSelector(state),
        isLoading: checkLoadingSelector(state),
        isDisabledBtn: isUnUseBtnSelector(state),
    }
}

export default compose(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState это типы для generic type
    connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps, {
        getUsersThunkCreator, getPageThunkCreator,
        setFollowThunkCreator, setUnfollowThunkCreator
    })
)(UsersContainer)

/* Вместо mapDispatchToProps мы передаем в connect объект action/thunk creators
 * чтобы сократить код до современного синтаксиса,
 * функция connect сама обернет dispatch в callback's
 *
 * // тоже самое :
 * const mapDispatchToProps = (dispatch) => {
 *     return {
 *         setFollow: (userID) => {
 *             dispatch(followAC(userID))
 *         },
 *         setUnfollow: (userID) => {
 *             dispatch(unfollowAC(userID))
 *         },
 *         setUsers: (users) => {
 *             dispatch(setUsersAC(users))
 *         },
 *         setPage: (num) => {
 *             dispatch(setPageAC(num))
 *         },
 *         setTotalCount: (num) => {
 *             dispatch(setTotalCountAC(num))
 *         },
 *         toggleFetch: (bool) => {
 *             dispatch(toggleFetchAC(bool))
 *         }
 *     }
 * }
 *
 * setFollowHandler = (id) => {
 *     //Мы перенесли всю логику в thunkCreator
 *     this.props.setFollowThunkCreator(id)
 *     this.props.toggleDisabledBtn(true, id)
 *     //Мы сделали инкапсуляцию axios метода в файл api
 *     usersAPI.setFollow(id).then(data => {
 *         if (data.resultCode === 0) {
 *             this.props.follow(id)
 *             console.log('Follow', data)
 *             this.props.toggleDisabledBtn(false, id)
 *         } else {
 *             console.log('Error AXIOS', data)
 *         }
 *     })
 * }
 */