import {connect} from "react-redux";
import Users from "./UsersClass";
import {followAC, setPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../store/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersPage: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer