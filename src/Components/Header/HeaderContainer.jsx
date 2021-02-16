import React from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthData} from "../../store/api-auth/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, login, email} = response.data.data
                    this.props.setAuthData(id, login, email)
                }
            })
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
    // isLoading: state.auth.isLoading
})


export default connect(mapStateToProps, {setAuthData})(HeaderContainer)