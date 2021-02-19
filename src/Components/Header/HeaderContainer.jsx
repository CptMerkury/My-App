import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuthThunkCreator} from "../../store/redux-thunk/auth-thunk";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.checkAuthThunkCreator()
    }

    render() {
        return (
            <Header {...this.props} auth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

//Функция которая из state передает props внутрь компоненты
const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {checkAuthThunkCreator})(HeaderContainer)