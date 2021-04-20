import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
})

type MapStateToProps = {
    isAuth: boolean
}

export default function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

    function RedirectComponent(props: MapStateToProps) {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>;

        return <Component {...restProps as unknown as WCP}/>
    }

    //Мы оборачиваем connect функцией нашу классовую компоненту, чтобы в пропсах получить isAuth
    const ConnectAuthRedirectComponent = connect<MapStateToProps, {}, WCP, AppStateType>(mapStateToProps)(RedirectComponent)

    return ConnectAuthRedirectComponent
}