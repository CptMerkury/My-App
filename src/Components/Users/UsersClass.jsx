import React from "react";
import classes from "./Users.module.css"
import classesItem from "./UsersItem.module.css"
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    componentWillUnmount() {
    }

    getUsers = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }
    setFollowHandler = (id) => {
        this.props.setFollow(id)
    }
    setUnfollowHandler = (id) => {
        this.props.setUnfollow(id)
    }

    selectPage = (num) => {
        this.props.setPage(num)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${num}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        const pagesArray = new Array(pagesCount).fill(1)

        const btnArray = []

        pagesArray.map((btn, idx) => {
           return btnArray.push(idx + 1)
        })

        const pagesBtn = btnArray.map((btn) => {
            return (
                <button
                    className={this.props.currentPage === btn ? classes.paginationBtnSelect : classes.paginationItem}
                    onClick={() => this.selectPage(btn)}
                >
                    {btn}
                </button>
            )
        })

        const userItem = this.props.usersPage.map(uData => {
            return (
                <div className={classesItem.container}>
                    <div className={classesItem.wrapper1}>
                        <div>
                            <img className={classesItem.usersImg}
                                 src={uData.photos.small || 'https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg'}
                                 alt="avatar"/>
                        </div>
                        <div>
                            {uData.followed ?
                                <button
                                    className={`${classesItem.usersUnfollowBtn} ${classesItem.usersItemBtn}`}
                                    onClick={() => this.setUnfollowHandler(uData.id)}
                                >Unfollow</button>
                                :
                                <button
                                    className={`${classesItem.usersFollowBtn} ${classesItem.usersItemBtn}`}
                                    onClick={() => this.setFollowHandler(uData.id)}
                                >Follow</button>}
                        </div>
                    </div>
                    <div className={classesItem.item}>
                        <div className={classesItem.wrapper2}>
                        <span className={classesItem.info}>User name:
                            <p>{(uData.name || undefined) ? uData.name : 'Not indicated'}</p>
                        </span>
                            <span className={classesItem.info}>User status:
                            <p>{(uData.status || undefined) ? uData.status : 'Not indicated'}</p>
                        </span>
                        </div>
                        <div className={classesItem.wrapper3}>
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
            <div className={classes.usersContainer}>
                <h2>Users</h2>
                <div className={classes.usersField}>
                    <div className={classes.users}>
                        <div className={classes.pagination}>
                            {pagesBtn}
                        </div>
                        <div className={classes.usersBlock}>
                            {userItem}
                        </div>
                        <button
                            className={classes.usersContainerBtn}
                            onClick={() => this.getUsers()}
                        >Show More
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users
