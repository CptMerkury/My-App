import {connect} from "react-redux";
import {
    follow,
    setPage,
    setTotalCount,
    setUsers,
    toggleFetch,
    unfollow
} from "../../store/api-users/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users/Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleFetch(false)
            })

    }

    componentWillUnmount() {
    }

    setFollowHandler = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
            withCredentials: true,
            headers: {
                'API-KEY': '3a48cb66-64d9-4e3b-a80f-5d88883726bc'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(id)
                    console.log('Follow')
                } else {
                    console.log('Error', response.data)
                }
            })
    }
    setUnfollowHandler = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '3a48cb66-64d9-4e3b-a80f-5d88883726bc'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unfollow(id)
                    console.log('Unfollow')
                } else {
                    console.log('Error', response.data)
                }
            })
    }

    selectPage = (num) => {
        this.props.setPage(num)
        this.props.toggleFetch(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
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