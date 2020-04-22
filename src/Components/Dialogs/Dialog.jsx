import React from "react";
import s from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Max
                </div>
                <div className={s.dialog}>
                    Vova
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you bro?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
};

export default Dialog