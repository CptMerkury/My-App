import Sidebar from "./SidebarLayout/Sidebar";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {SidebarInitialStateType} from "../../store/reducers/sidebar/sidebarReducer";

type MapStateToPropsType = {
    sidebar: SidebarInitialStateType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        sidebar: state.sidebar
    }
}

const SidebarContainer = connect<MapStateToPropsType, any, any, AppStateType>(mapStateToProps)(Sidebar)

export default SidebarContainer
