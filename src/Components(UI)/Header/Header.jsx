import React from "react";
import classes from './Header.module.css';
import logo from "../../logo.svg"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.headerWrapper}>
            <header className={classes.mediaBlock}>
                <img src={logo} alt="logo"/>
                <h2>Social App</h2>
            </header>
            <div className={classes.loginBlock}>
                <NavLink to={'/profile'}>
                    {props.auth ? <div className={classes.userName}>{props.login}</div> : null}
                </NavLink>
                <NavLink to={'/login'}>
                    <button className={classes.authBtn}>{props.auth ? 'LOGOUT' : 'LOGIN'}</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Header