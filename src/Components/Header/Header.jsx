import React from "react";
import classes from './Header.module.css';
import logo from "../../logo.svg"

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
            <h2>Social App</h2>
        </header>
    )
}
export default Header