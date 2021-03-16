import React from "react";
import Header from "./HeaderLayout/Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {signOutThunkCreator} from "../../store/thunk/auth/authThunk";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}
                    signOut={this.props.signOutThunkCreator}
            />
        )
    }
}

/* Функция которая из state передает props внутрь компоненты */
const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {signOutThunkCreator})
)(HeaderContainer)
