import {connect} from "react-redux";
import {compose} from "redux";

import Dialog from "./DIalogLayout/Dialog";
import {sendMessageCreator} from "../../store/reducers/dialogs/dialogsReducer";
import withAuthRedirect from "../../utils/hoc/authRedirect";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
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
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialog)

/*  Вызов всех эти обработчиков ниже мы заменили на одну функцию compose выше
 * //Redirect use in HOC function
 * const withAuth = withAuthRedirect(Dialog)
 * const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuth)
 *
 * export default DialogsContainer
 */