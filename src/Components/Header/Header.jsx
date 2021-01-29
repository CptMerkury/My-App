import React from "react";
import style from './Header.module.css';
import logo from "../../logo.svg"

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo"/>
            <h2>Social App</h2>
        </header>
    )
}
export default Header