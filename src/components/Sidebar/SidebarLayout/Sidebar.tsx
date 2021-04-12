import React from "react";
import classes from '../Sidebar.module.css';
import SidebarFriends from "../SidebarItem/sidebarFriends";

type FriendListType = {
    id: number
    name: string
}
type PropsType = {
    sidebar: {
        friendList: Array<FriendListType>
    }
}

const Sidebar: React.FC<PropsType> = ({sidebar}) => {
    const friendItem = sidebar.friendList.map(uData => <SidebarFriends name={uData.name} key={uData.id}/>)

    return (
        <div className={classes.container}>
            {friendItem}
        </div>
    )
}

export default Sidebar
