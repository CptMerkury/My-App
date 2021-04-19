import React from "react";
import classes from '../Header.module.css';
import logo from "../../../assets/logo/logo.svg"
import {NavLink} from "react-router-dom";

type PropsType = {
    login: string | null
    isAuth: boolean
    signOut: () => void
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.headerWrapper}>
            <header className={classes.mediaBlock}>
                <img src={logo} alt="logo"/>
                <h2>Social App</h2>
            </header>
            <div className={classes.loginBlock}>
                <NavLink to={'/profile'}>
                    {props.isAuth ? <div className={classes.userName}>{props.login}</div> : null}
                </NavLink>
                {props.isAuth
                    ? <button className={classes.authBtn} onClick={props.signOut}>LOGOUT</button>
                    : <NavLink to={'/login'}>
                        <button className={classes.authBtn}>LOGIN</button>
                    </NavLink>
                }
            </div>
        </div>
    )
}
export default Header