import React from 'react'
import classesItem from "./Users.module.css";
import {NavLink} from "react-router-dom";

const UsersItem = ({user, ...props}) => {
    return (
        <div className={classesItem.userInfoWrapper}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={classesItem.infoWrapperImg}
                             src={user.photos.small || 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button
                            className={`${classesItem.unFollowBtn} ${classesItem.userSubscribeBtn}`}
                            onClick={() => props.setUnfollowHandler(user.id)}
                            //метод some вернет на true если id находится в массиве
                            disabled={props.isDisabled.some(id => id === user.id)}
                        >Unfollow</button>
                        :
                        <button
                            className={`${classesItem.followBtn} ${classesItem.userSubscribeBtn}`}
                            //метод some вернет на true если id находится в массиве
                            onClick={() => props.setFollowHandler(user.id)}
                            disabled={props.isDisabled.some(id => id === user.id)}
                        >Follow</button>}
                </div>
            </div>
            <div className={classesItem.userInfoContainer}>
                <div>
                        <span className={classesItem.info}>User name:
                            <p>{(user.name || undefined) ? user.name : 'Not indicated'}</p>
                        </span>
                    <span className={classesItem.info}>User status:
                            <p>{(user.status || undefined) ? user.status : 'Not indicated'}</p>
                        </span>
                </div>
                <div>
                        <span className={classesItem.location}>Country:
                            <p>{(user.location || undefined) ? user.location.country : 'Not indicated'}</p>
                        </span>
                    <span className={classesItem.location}>City:
                            <p>{(user.location || undefined) ? user.location.city : 'Not indicated'}</p>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default UsersItem