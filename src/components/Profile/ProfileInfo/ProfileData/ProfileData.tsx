import React from 'react';
import classes from "../ProfileInfo.module.css";
import {NavLink} from "react-router-dom";
import {ContactsType, ProfileType} from "../../../../store/types/@types";

type ProfileDataPropsType = {
    profile: ProfileType | null
    isOwner: boolean
    contacts: ContactsType | null
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, contacts, isOwner}) => {

    return (
        <div className={classes.userInfoBlock}>
            <div className={classes.aboutMe}>
                <p className={classes.aboutMeTitle}>About me:</p>
                <p>{profile ? profile.aboutMe : 'Not indicated'}</p>
            </div>
            <div className={classes.linkBlock}>
                {contacts && Object.keys(contacts).map(key => {
                    return <Contact key={key} title={key} value={contacts[key as keyof ContactsType]}/>
                })}
            </div>
            {isOwner
                ? <NavLink to={'/setting'}>
                    <button className={classes.editInfoBtn}>Edit info</button>
                </NavLink>
                : null}
        </div>
    )
}

type ContactsPropsType = {
    title: string
    value: string | null
}

const Contact: React.FC<ContactsPropsType> = ({title, value}) => {
    return value ? <a href={value} target='_blank' rel="noreferrer">{title}</a> : null
}

export default ProfileData