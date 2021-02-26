import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuthThunkCreator, setLogoutThunkCreator} from "../../store/thunk/auth";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.checkAuthThunkCreator()
    }

    setLogout() {
        this.props.setLogoutThunkCreator()
    }

    render() {
        return (
            <Header {...this.props}
                    auth={this.props.isAuth}
                    login={this.props.login}
                    setLogout={this.props.setLogout}
            />
        )
    }
}

//Функция которая из state передает props внутрь компоненты
const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {checkAuthThunkCreator, setLogoutThunkCreator})
)(HeaderContainer)
