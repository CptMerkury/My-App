import classes from "../Users.module.css";
import React, {FC} from 'react';
import ReactPaginate from "react-paginate";

import UsersItem from "../UserItem/UserItem";
import {Preloader} from "../../common/preloader/spinner";
import {UserType} from "../../../store/types/@types";
// import Paginator from "../../common/paginator/paginator";

type PropsType = {
    usersPage: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    isDisabled: Array<number>
    selectPage: (num: number) => void
    setFollowHandler: (id: number) => void
    setUnfollowHandler: (id: number) => void
}

const Users: FC<PropsType> = (
    {
        usersPage = [], totalCount, pageSize, currentPage, isLoading,
        isDisabled, selectPage, setFollowHandler, setUnfollowHandler
    }
) => {

    const pagesCount = Math.ceil(totalCount / pageSize)

    let userItem = usersPage.map(uData => (
            <UsersItem user={uData}
                       setUnfollowHandler={(id: number) => setUnfollowHandler(id)}
                       setFollowHandler={(id: number) => setFollowHandler(id)}
                       isDisabled={isDisabled}
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
                        onPageChange={(e) => selectPage(e.selected + 1)}
                        containerClassName={classes.reactPaginate}
                        activeClassName={classes.reactPaginationBtn}
                    />
                    {isLoading ? <Preloader/> : <div>{userItem}</div>}
                    {/*If we want use custom pagination, use template below*/}
                    {/*<Paginator*/}
                    {/*    totalItemsCount={totalCount}*/}
                    {/*    pageSize={pageSize}*/}
                    {/*    currentPage={currentPage}*/}
                    {/*    isLoading={isLoading}*/}
                    {/*    selectPage={selectPage}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    )
}

export default Users
