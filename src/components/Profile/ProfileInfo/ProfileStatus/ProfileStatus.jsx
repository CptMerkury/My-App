import React, {useState, useEffect} from 'react'
import classes from "../ProfileInfo.module.css";
import {Loader} from "../../../common/preloader/loading";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onEditMode = () => setEditMode(props.isOwner)
    const offEditMode = () => setEditMode(false)

    const addStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const updateTextStatus = (e) => setStatus(e.target.value)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={classes.statusBlock}>
            {!editMode
                ? <div className={classes.statusDescr} onClick={onEditMode}>
                    {props.loading
                        ? <Loader/>
                        : <p>{props.status || 'Not indicated'}</p>
                    }
                </div>
                :
                <div className={classes.statusDescr}>
                    <div>
                        <input onChange={updateTextStatus} type='text' autoFocus={true} placeholder='Change status'
                               value={status}/>
                    </div>
                    <div>
                        <button type='submit' className={classes.changeStatusBtn} onClick={addStatus}>Change</button>
                        <button type='button' className={classes.cancelStatusBtn} onClick={offEditMode}>Cancel</button>
                    </div>
                </div>
            }
            <div className={classes.bubble2}/>
            <div className={classes.bubble1}/>
        </div>
    )
}

export default ProfileStatus