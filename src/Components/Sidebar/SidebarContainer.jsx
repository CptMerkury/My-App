// import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

// const SidebarContainer = (props) => {
//     let state = props.store.getState();
//     return <Sidebar
//         sidebarData={state.sidebar}
//     />
// }

const mapStateToProps = (state) => {
    return {
        sidebarData: state.sidebar
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer