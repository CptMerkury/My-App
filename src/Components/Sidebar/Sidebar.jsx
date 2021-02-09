import React from "react";
import classes from './Sidebar.module.css';
import SidebarFriends from './SidebarItem/sidebarFriends'


const Sidebar = (props) => {
    const friendItem = props.sidebarData.userList.map(uData => <SidebarFriends name={uData.name} key={uData.id}/>)

    return (
        <div className={classes.container}>
            {friendItem}
        </div>
    )
}
export default Sidebar