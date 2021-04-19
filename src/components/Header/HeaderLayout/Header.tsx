import React from "react";
import classes from '../Header.module.css';
import logo from "../../../assets/logo/logo.svg"
import {NavLink} from "react-router-dom";

type PropsType = {
    login: string | null
    isAuth: boolean
    signOut: () => void
}

const Header: React.FC<PropsType> = ({isAuth, login,signOut}) => {
    return (
        <div className={classes.headerWrapper}>
            <header className={classes.mediaBlock}>
                <img src={logo} alt="logo"/>
                <h2>Social App</h2>
            </header>
            <div className={classes.loginBlock}>
                <NavLink to={'/profile'}>
                    {isAuth ? <div className={classes.userName}>{login}</div> : null}
                </NavLink>
                {isAuth
                    ? <button className={classes.authBtn} onClick={signOut}>LOGOUT</button>
                    : <NavLink to={'/login'}>
                        <button className={classes.authBtn}>LOGIN</button>
                    </NavLink>
                }
            </div>
        </div>
    )
}
export default Header