import classes from "../Users.module.css";
import React from 'react';
import ReactPaginate from "react-paginate";

import UsersItem from "../UserItem/UserItem";
import {Preloader} from "../../common/preloader";
import Paginator from "../../common/paginator/paginator";

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize)

    const userItem = props.usersPage.map(uData => (
            <UsersItem user={uData}
                       setUnfollowHandler={(id) => props.setUnfollowHandler(id)}
                       setFollowHandler={(id) => props.setFollowHandler(id)}
                       isDisabled={props.isDisabled}
                       key={uData.id}/>
        )
    )

    return (
        <div className={classes.usersContainer}>
            <h2>Users</h2>
            <div className={classes.usersField}>
                <div className={classes.usersItems}>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={'~'}
                        pageCount={pagesCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={(e) => props.selectPage(e.selected + 1)}
                        containerClassName={classes.reactPaginate}
                        activeClassName={classes.reactPaginationBtn}
                    />
                    {props.isLoading ? <Preloader/> : <div>{userItem}</div>}
                    {/*<Paginator*/}
                    {/*    totalItemsCount={props.totalCount}*/}
                    {/*    pageSize={props.pageSize}*/}
                    {/*    currentPage={props.currentPage}*/}
                    {/*    isLoading={props.isLoading}*/}
                    {/*    selectPage={props.selectPage}*/}
                    {/*    portionSize={10}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    )
}

export default Users
