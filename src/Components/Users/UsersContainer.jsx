import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../store/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersPage: state.userPage.usersList
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
        setUsers: async (users) => {
            await dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer