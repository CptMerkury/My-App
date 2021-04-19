import React from "react";
import Header from "./HeaderLayout/Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {signOutThunkCreator} from "../../store/thunk/auth/authThunk";
import {AppStateType} from "../../store/store";

export type MapStateToProps = {
    login: string | null
    isAuth: boolean
}
export type MapDispatchToProps = {
    signOutThunkCreator: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps

const HeaderContainer:React.FC<PropsType> = (props) => {
    return (
        <Header login={props.login} isAuth={props.isAuth} signOut={props.signOutThunkCreator} />
    )
}

/* Функция которая из state передает props внутрь компоненты */
const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {signOutThunkCreator})
)(HeaderContainer)
