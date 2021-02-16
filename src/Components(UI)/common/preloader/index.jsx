import React from 'react'
import classes from "./spinner.module.css";
import spinner from '../../../assets/icons/35.svg'


export const Preloader = () => {
    return (
        <div className={classes.userLoading}>
            <div className={classes.spinner}>
                <img src={spinner} alt="spinner"/>
            </div>
        </div>
    )
}