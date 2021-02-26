import {connect} from "react-redux";

import {sendMessageCreator} from '../../store/reducers/dialogs/dialogsReducer';
import Dialog from "./Dialog";
import withAuthRedirect from "../../HOC/authRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        textMessage: state.dialogPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: (value) => {
            dispatch(sendMessageCreator(value));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialog)

// Вызов всех эти обработчиков ниже мы заменили на одну функцию compose выше
//
// //Redirect use in HOC function
// const withAuth = withAuthRedirect(Dialog)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuth)
//
// export default DialogsContainer