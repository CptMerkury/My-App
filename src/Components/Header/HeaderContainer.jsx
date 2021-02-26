import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuthThunkCreator, signOutThunkCreator} from "../../store/thunk/auth";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.checkAuthThunkCreator()
    }

    signOut = () => {
       this.props.signOutThunkCreator()
    }

    render() {
        return (
            <Header {...this.props}
                    auth={this.props.isAuth}
                    userLogin={this.props.login}
                    logout={this.signOut}
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
    connect(mapStateToProps, {checkAuthThunkCreator, signOutThunkCreator})
)(HeaderContainer)
