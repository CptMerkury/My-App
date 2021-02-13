// import React from "react";
// import classes from "./Users.module.css"
// import classesItem from "./UsersItem.module.css"
// import * as axios from "axios";
//
// const Users = (props) => {
//
//     const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/users'
//
//     const getUsers = (url) => {
//         axios
//             .get(url)
//             .then(response => props.setUsers(response.data.items))
//     }
//
//     const setFollowHandler = (id) => {
//         props.setFollow(id)
//     }
//     const setUnfollowHandler = (id) => {
//         props.setUnfollow(id)
//     }
//
//     const userItem = props.usersPage.map(uData => {
//         return (
//             <div className={classesItem.container}>
//                 <div className={classesItem.wrapper1}>
//                     <div>
//                         <img className={classesItem.usersImg}
//                              src={uData.photos.small ||
//                              'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'}
//                              alt="avatar"/>
//                     </div>
//                     <div>
//                         {uData.followed ?
//                             <button
//                                 className={`${classesItem.usersUnfollowBtn} ${classesItem.usersItemBtn}`}
//                                 onClick={() => setUnfollowHandler(uData.id)}
//                             >Unfollow</button>
//                             :
//                             <button
//                                 className={`${classesItem.usersFollowBtn} ${classesItem.usersItemBtn}`}
//                                 onClick={() => setFollowHandler(uData.id)}
//                             >Follow</button>}
//                     </div>
//                 </div>
//                 <div className={classesItem.item}>
//                     <div className={classesItem.wrapper2}>
//                         <span className={classesItem.info}>User name:
//                             <p>{(uData.name || undefined) ? uData.name : 'Not indicated'}</p>
//                         </span>
//                         <span className={classesItem.info}>User status:
//                             <p>{(uData.status || undefined) ? uData.status : 'Not indicated'}</p>
//                         </span>
//                     </div>
//                     <div className={classesItem.wrapper3}>
//                         <span className={classesItem.location}>Country:
//                             <p>{(uData.location || undefined) ? uData.location.country : 'Not indicated'}</p>
//                         </span>
//                         <span className={classesItem.location}>City:
//                             <p>{(uData.location || undefined) ? uData.location.city : 'Not indicated'}</p>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         )
//     })
//
//     return (
//         <div className={classes.usersContainer}>
//             <h2>Users</h2>
//             <div className={classes.usersField}>
//                 <div className={classes.users}>
//                     <div className={classes.usersBlock}>
//                         {userItem}
//                     </div>
//                     <button
//                         className={classes.usersContainerBtn}
//                         onClick={() => getUsers(BASE_URL)}
//                     >Show More
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// };
//
// export default Users
