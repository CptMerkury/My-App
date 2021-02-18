import {connect} from "react-redux";
import {
    follow,
    setPage,
    setTotalCount,
    setUsers,
    toggleDisabledBtn,
    toggleFetch,
    unfollow
} from "../../store(BLL)/reducers/users/usersReducer";
import React from "react";
import Users from "./Users/Users";
import {usersAPI} from "../../api(DAL)/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetch(true)
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.toggleFetch(false)
            })

    }

    componentWillUnmount() {
    }

    setFollowHandler = (id) => {
        this.props.toggleDisabledBtn(true, id)
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.setFollow(id).then(data => {
            if (data.resultCode === 0) {
                this.props.follow(id)
                console.log('Follow', data)
                this.props.toggleDisabledBtn(false, id)
            } else {
                console.log('Error AXIOS', data)
            }
        })
    }
    setUnfollowHandler = (id) => {
        this.props.toggleDisabledBtn(true, id)
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.setUnfollow(id).then(data => {
            if (data.resultCode === 0) {
                this.props.unfollow(id)
                console.log('Unfollow', data)
                this.props.toggleDisabledBtn(false, id)
            } else {
                console.log('Error AXIOS', data)
            }
        })
    }

    selectPage = (num) => {
        this.props.setPage(num)
        this.props.toggleFetch(true)
        //Мы сделали инкапсуляцию axios метода в файл api
        usersAPI.getPage(num, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleFetch(false)
        })
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalCount,
    toggleFetch,
    toggleDisabledBtn
})(UsersContainer)

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