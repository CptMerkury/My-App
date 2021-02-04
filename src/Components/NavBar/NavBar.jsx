import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";


const NavBar = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends'>Friends</NavLink>
            </div>
            <hr/>
            <Sidebar userList={props.userList}/>
        </nav>
    )
}
export default NavBar