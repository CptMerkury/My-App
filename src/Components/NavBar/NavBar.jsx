import React from "react";
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
        </nav>
    )
}
export default NavBar