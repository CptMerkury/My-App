import {connect} from "react-redux";
import {
    followAC,
    setPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFetchAC,
    unfollowAC
} from "../../store/api-users/usersReducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users/Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetch(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.toggleFetch(false)
            })
    }

    componentWillUnmount() {
    }

    setFollowHandler = (id) => {
        this.props.setFollow(id)
    }
    setUnfollowHandler = (id) => {
        this.props.setUnfollow(id)
    }

    selectPage = (num) => {
        this.props.setPage(num)
        this.props.toggleFetch(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.pageSize}`)
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
const mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userID) => {
            dispatch(followAC(userID))
        },
        setUnfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (num) => {
            dispatch(setPageAC(num))
        },
        setTotalCount: (num) => {
            dispatch(setTotalCountAC(num))
        },
        toggleFetch: (bool) => {
            dispatch(toggleFetchAC(bool))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)