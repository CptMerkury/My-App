import React from 'react'
import classesItem from "./Users.module.css";
import {NavLink} from "react-router-dom";

const UsersItem = (props) => {
    return (
        <div className={classesItem.userInfoWrapper}>
            <div>
                <div>
                    <NavLink to={'/profile/' + props.id}>
                        <img className={classesItem.infoWrapperImg}
                             src={props.photos.small || 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'}
                             alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {props.followed ?
                        <button
                            className={`${classesItem.unFollowBtn} ${classesItem.userSubscribeBtn}`}
                            onClick={() => props.setUnfollowHandler(props.id)}
                        >Unfollow</button>
                        :
                        <button
                            className={`${classesItem.followBtn} ${classesItem.userSubscribeBtn}`}
                            onClick={() => props.setFollowHandler(props.id)}
                        >Follow</button>}
                </div>
            </div>
            <div className={classesItem.userInfoContainer}>
                <div>
                        <span className={classesItem.info}>User name:
                            <p>{(props.name || undefined) ? props.name : 'Not indicated'}</p>
                        </span>
                    <span className={classesItem.info}>User status:
                            <p>{(props.status || undefined) ? props.status : 'Not indicated'}</p>
                        </span>
                </div>
                <div>
                        <span className={classesItem.location}>Country:
                            <p>{(props.location || undefined) ? props.location.country : 'Not indicated'}</p>
                        </span>
                    <span className={classesItem.location}>City:
                            <p>{(props.location || undefined) ? props.location.city : 'Not indicated'}</p>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default UsersItem