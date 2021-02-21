import {connect} from "react-redux";
import React from "react";
import Users from "./Users/Users";
import {
    getPageThunkCreator,
    getUsersThunkCreator,
    setFollowThunkCreator,
    setUnfollowThunkCreator
} from "../../store/thunk/users";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    setFollowHandler = (id) => {
        //Мы перенесли всю логику в thunkCreator
        this.props.setFollowThunkCreator(id)
    }
    setUnfollowHandler = (id) => {
        this.props.setUnfollowThunkCreator(id)
    }

    selectPage = (num) => {
        this.props.getPageThunkCreator(num, this.props.pageSize)
    }

    render() {
        return (
            <Users
                usersPage={this.props.usersPage}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}

                selectPage={(num) => this.selectPage(num)}
                setFollowHandler={(id) => this.setFollowHandler(id)}
                setUnfollowHandler={(id) => this.setUnfollowHandler(id)}

                isLoading={this.props.isLoading}
                isDisabled={this.props.isDisabledBtn}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        usersPage: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
        isLoading: state.userPage.isLoading,
        isDisabledBtn: state.userPage.isDisabledBtn
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsersThunkCreator,
        getPageThunkCreator,
        setFollowThunkCreator,
        setUnfollowThunkCreator
    })
)(UsersContainer)

//Вместо mapDispatchToProps мы передаем в connect объект action creates
//чтобы сократить код до современного синтаксиса,
//функция connect сама обернет dispatch в callback's

// тоже самое :
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setFollow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         setUnfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (num) => {
//             dispatch(setPageAC(num))
//         },
//         setTotalCount: (num) => {
//             dispatch(setTotalCountAC(num))
//         },
//         toggleFetch: (bool) => {
//             dispatch(toggleFetchAC(bool))
//         }
//     }
// }

// setFollowHandler = (id) => {
//     //Мы перенесли всю логику в thunkCreator
//     this.props.setFollowThunkCreator(id)
//     this.props.toggleDisabledBtn(true, id)
//     //Мы сделали инкапсуляцию axios метода в файл api
//     usersAPI.setFollow(id).then(data => {
//         if (data.resultCode === 0) {
//             this.props.follow(id)
//             console.log('Follow', data)
//             this.props.toggleDisabledBtn(false, id)
//         } else {
//             console.log('Error AXIOS', data)
//         }
//     })
// }