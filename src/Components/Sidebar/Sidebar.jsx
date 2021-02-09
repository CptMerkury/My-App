import React from "react";
import classes from './Sidebar.module.css';
import FriendBar from './SidebarItem/FriendBar'


const Sidebar = (props) => {
    const friendItem = props.sidebarData.userList.map(uData => <FriendBar name={uData.name} key={uData.id}/>)

    return (
        <div className={classes.container}>
            {friendItem}
        </div>
    )
}
export default Sidebar