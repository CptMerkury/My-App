import React from 'react'
import classes from "./userSpinner.module.css";
import spinner from '../../../assets/icons/35.svg'


const UserSpinner = () => {
    return (
        <div className={classes.userLoading}>
            <div className={classes.spinner}>
                <img src={spinner} alt="spinner"/>
            </div>
        </div>
    )
}

export default UserSpinner