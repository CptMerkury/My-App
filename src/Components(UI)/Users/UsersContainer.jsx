import {connect} from "react-redux";
import {
    follow,
    setPage,
    setTotalCount,
    setUsers,
    toggleFetch,
    unfollow
} from "../../store(BLL)/reducers/users/usersReducer";
import React from "react";
import Users from "./Users/Users";
import {getPage, getUsers, setFollow, setUnfollow} from "../../api(DAL)/users-api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetch(true)
        //Мы сделали инкапсуляцию axios метода в файл api
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleFetch(false)
            })

    }

    componentWillUnmount() {
    }

    setFollowHandler = (id) => {
        //Мы сделали инкапсуляцию axios метода в файл api
        setFollow(id).then(response => {
            if (response.data.resultCode === 0) {
                this.props.follow(id)
                console.log('Follow', response.data)
            } else {
                console.log('Error AXIOS', response.data)
            }
        })
    }
    setUnfollowHandler = (id) => {
        //Мы сделали инкапсуляцию axios метода в файл api
        setUnfollow(id).then(response => {
            if (response.data.resultCode === 0) {
                this.props.unfollow(id)
                console.log('Unfollow', response.data)
            } else {
                console.log('Error AXIOS', response.data)
            }
        })
    }

    selectPage = (num) => {
        this.props.setPage(num)
        this.props.toggleFetch(true)
        //Мы сделали инкапсуляцию axios метода в файл api
        getPage(num, this.props.pageSize).then(response => {
            this.props.setUsers(response.data.items)
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
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalCount,
    toggleFetch
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