import {sendMessageCreator, updateMessageBodyCreator} from '../../store/reducers/dialogs/dialogsReducer';
import Dialog from "./Dialog";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        textMessage: state.dialogPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createMessage: () => {
            dispatch(sendMessageCreator());
        },
        changeHandler: (value) => {
            dispatch(updateMessageBodyCreator(value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogsContainer