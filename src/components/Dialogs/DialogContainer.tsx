import {connect} from "react-redux";
import {compose} from "redux";

import Dialog from "./DIalogLayout/Dialog";
import withAuthRedirect from "../../utils/hoc/authRedirect";
import {dialogActions} from "../../store/reducers/dialogs/dialogsReducer";
import {AppStateType} from "../../store/store";
import React from "react";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        createMessage: dialogActions.sendMessageCreator
    }),
)(Dialog);