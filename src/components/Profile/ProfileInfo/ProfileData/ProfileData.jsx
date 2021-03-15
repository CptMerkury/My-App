import React from 'react';
import classes from "../ProfileInfo.module.css";
import {NavLink} from "react-router-dom";

const Contact = ({title, value}) => {
    return <a href={value} target='_blank' rel="noreferrer">{title}</a>
}

const ProfileData = ({profile, contacts, isOwner}) => {

    return (
        <div className={classes.userInfoBlock}>
            <div className={classes.aboutMe}>
                <p className={classes.aboutMeTitle}>About me:</p>
                <p>{profile.aboutMe || 'Not indicated'}</p>
            </div>
            <div className={classes.linkBlock}>
                {contacts && Object.keys(contacts).map(key => {
                    return <Contact key={key} title={key} value={contacts[key]}/>
                })}
            </div>
            {isOwner
                ? <NavLink to={'/setting'}>
                    <button>Edit info</button>
                </NavLink>
                : null}
        </div>
    )
}

export default ProfileData