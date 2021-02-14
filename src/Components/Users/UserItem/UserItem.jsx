import React from 'react';
import classes from "../Users.module.css";
import classesItem from "./UsersItem.module.css";
import ReactPaginate from "react-paginate";

const UserItem = (props) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize)

    //For my Paginate
    // const pagesArray = new Array(pagesCount).fill(1)
    //
    // const btnArray = []
    //
    // pagesArray.map((btn, idx) => {
    //     return btnArray.push(idx + 1)
    // })
    //
    // const pagesBtn = btnArray.map((btn) => {
    //     return (
    //         <button
    //             className={props.currentPage === btn ? classesItem.myPaginationBtnActive : classesItem.myPaginationBtn}
    //             onClick={() => props.selectPage(btn)}
    //         >
    //             {btn}
    //         </button>
    //     )
    // })

    const userItem = props.usersPage.map(uData => {
        return (
            <div className={classesItem.userInfoWrapper}>
                <div>
                    <div>
                        <img className={classesItem.infoWrapperImg}
                             src={uData.photos.small || 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'}
                             alt="avatar"/>
                    </div>
                    <div>
                        {uData.followed ?
                            <button
                                className={`${classesItem.unFollowBtn} ${classesItem.userSubscribeBtn}`}
                                onClick={() => props.setUnfollowHandler(uData.id)}
                            >Unfollow</button>
                            :
                            <button
                                className={`${classesItem.followBtn} ${classesItem.userSubscribeBtn}`}
                                onClick={() => props.setFollowHandler(uData.id)}
                            >Follow</button>}
                    </div>
                </div>
                <div className={classesItem.userInfoContainer}>
                    <div>
                        <span className={classesItem.info}>User name:
                            <p>{(uData.name || undefined) ? uData.name : 'Not indicated'}</p>
                        </span>
                        <span className={classesItem.info}>User status:
                            <p>{(uData.status || undefined) ? uData.status : 'Not indicated'}</p>
                        </span>
                    </div>
                    <div>
                        <span className={classesItem.location}>Country:
                            <p>{(uData.location || undefined) ? uData.location.country : 'Not indicated'}</p>
                        </span>
                        <span className={classesItem.location}>City:
                            <p>{(uData.location || undefined) ? uData.location.city : 'Not indicated'}</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        (
            <div className={classes.usersContainer}>
                <h2>Users</h2>
                <div className={classes.usersField}>
                    <div className={classes.usersItems}>
                        <ReactPaginate
                            previousLabel={"PREV"}
                            nextLabel={"NEXT"}
                            breakLabel={'...'}
                            pageCount={pagesCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={(e) => props.selectPage(e.selected + 1)}
                            containerClassName={classesItem.reactPaginate}
                            activeClassName={classesItem.reactPaginationBtn}
                        />
                        {/*<div className={classes.myPagination}>*/}
                        {/*    {pagesBtn}*/}
                        {/*</div>*/}
                        {userItem}
                    </div>
                </div>
            </div>
        )
    )
}

export default UserItem
