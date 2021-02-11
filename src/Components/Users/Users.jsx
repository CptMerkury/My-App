import React from "react";
import classes from "./Users.module.css"
import classesItem from "./UsersItem.module.css"

const Users = (props) => {

   if (props.usersPage.length === 0){
       props.setUsers([
           {
               id: 1,
               followed: false,
               name: 'Ivan',
               photoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
               status: 'Hi!',
               location: {country: 'Russia', city: 'Moscow'}
           },
           {
               id: 2,
               followed: false,
               name: 'Dmitriy',
               photoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
               status: 'On job',
               location: {country: 'Belarus', city: 'Minsk'}
           },
           {
               id: 3,
               followed: false,
               name: 'Max',
               photoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
               status: 'Hello darling',
               location: {country: 'Russia', city: 'Kazan'}
           },
           {
               id: 4,
               followed: true,
               name: 'Andrew',
               photoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
               status: 'Hello darling',
               location: {country: 'Russia', city: 'Saints-Petersburg'}
           },
           {
               id: 5,
               followed: true,
               name: 'Vladimir',
               photoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
               status: 'Hello darling',
               location: {country: 'Ukraine', city: 'Kiev'}
           },
           {
               id: 6,
               followed: true,
               name: 'Tommy',
               photoUrl: 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg',
               status: 'USA!!! USA!!! USA!!!',
               location: {country: 'United State', city: 'Washington'}
           },
       ])
   }

    const setFollowHandler = (id) => {
        props.setFollow(id)
    }
    const setUnfollowHandler = (id) => {
        props.setUnfollow(id)
    }

    const userItem = props.usersPage.map(uData => {
        return (
            <div className={classesItem.container}>
                <div className={classesItem.wrapper1}>
                    <div>
                        <img className={classesItem.usersImg}
                             src={uData.photoUrl}
                             alt="avatar"/>
                    </div>
                    <div>
                        {uData.followed ?
                            <button
                                className={`${classesItem.usersUnfollowBtn} ${classesItem.usersItemBtn}`}
                                onClick={ () => setUnfollowHandler(uData.id)}
                            >Unfollow</button>
                            :
                            <button
                                className={`${classesItem.usersFollowBtn} ${classesItem.usersItemBtn}`}
                                onClick={ () => setFollowHandler(uData.id)}
                            >Follow</button>}
                    </div>
                </div>
                <div className={classesItem.item}>
                    <div className={classesItem.wrapper2}>
                        <span className={classesItem.info}>User name:<p>{uData.name}</p></span>
                        <span className={classesItem.info}>User status: <p>{uData.status}</p></span>
                    </div>
                    <div className={classesItem.wrapper3}>
                        <span className={classesItem.location}>Country: <p>{uData.location.country}</p></span>
                        <span className={classesItem.location}>City: <p>{uData.location.city}</p></span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.usersContainer}>
            <h2>Users</h2>
            <div className={classes.usersField}>
                <div className={classes.users}>
                    <div className={classes.usersBlock}>
                        {userItem}
                    </div>
                    <button className={classes.usersContainerBtn}>Show More</button>
                </div>
            </div>
        </div>
    )
};

export default Users
