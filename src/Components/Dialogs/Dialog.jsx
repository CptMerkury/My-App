import React from "react";
import s from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className='dialogs'>
            <div className='dialogs-item'>
                <div className='item'>
                    Sveta
                </div>
                <div className='item'>
                    Ivan
                </div>
                <div className='item'>
                    Dima
                </div>
                <div className='item'>
                    Max
                </div>
                <div className='item'>
                    Vova
                </div>
            </div>
        </div>
    )
};

export default Dialog