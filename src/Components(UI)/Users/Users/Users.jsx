import React from 'react';
import classes from "../Users.module.css";
import ReactPaginate from "react-paginate";
import UsersItem from "./UserItem/UserItem";
import {Preloader} from "../../common/preloader/index";

const Users = (props) => {

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
    //             disabled={props.isLoading}
    //         >
    //             {btn}
    //         </button>
    //     )
    // })

    const userItem = props.usersPage.map(uData => <UsersItem
        photos={uData.photos}
        name={uData.name}
        location={uData.location}
        status={uData.status}
        followed={uData.followed}
        id={uData.id}
        setUnfollowHandler={(id) => props.setUnfollowHandler(id)}
        setFollowHandler={(id) => props.setFollowHandler(id)}
        key={uData.id}/>)

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
                            containerClassName={classes.reactPaginate}
                            activeClassName={classes.reactPaginationBtn}
                        />
                        {/*<div className={classes.myPagination}>*/}
                        {/*    {pagesBtn}*/}
                        {/*</div>*/}
                        {props.isLoading ? <Preloader/> : <>{userItem}</>}
                    </div>
                </div>
            </div>
        )
    )
}

export default Users
