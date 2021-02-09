import React from "react";
import Sidebar from "./Sidebar";


const SidebarContainer = (props) => {
    let state = props.store.getState();
    return <Sidebar
        sidebarData={state.sidebar}
    />
}
export default SidebarContainer