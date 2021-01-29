import React from "react";
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/Profile'>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Dialogs'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/News'>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Music'>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/Setting'>Setting</NavLink>
            </div>
        </nav>
    )
}
export default NavBar