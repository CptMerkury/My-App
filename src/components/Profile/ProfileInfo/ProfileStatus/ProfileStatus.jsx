import React, {useState, useEffect} from 'react'
import classes from "../ProfileInfo.module.css";
import {Loader} from "../../../common/preloader/loading";

const ProfileStatus = ({statusData, saveStatus, isOwner, loading}) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(statusData)

    const onEditMode = () => setEditMode(isOwner)
    const offEditMode = () => setEditMode(false)

    const addStatus = () => {
        setEditMode(false)
        saveStatus(status)
    }

    const updateTextStatus = (e) => setStatus(e.target.value)

    useEffect(() => {
        setStatus(statusData)
    }, [statusData])

    return (
        <div className={classes.statusBlock}>
            {!editMode
                ? <div className={classes.statusDescr} onClick={onEditMode}>
                    {loading
                        ? <Loader/>
                        : <p>{statusData || 'Not indicated'}</p>
                    }
                </div>
                :
                <div className={classes.statusDescr}>
                    <div>
                        <input onChange={updateTextStatus} type='text' autoFocus={true} placeholder='Change status'
                               value={status}/>
                    </div>
                    <br/>
                    <div>
                        {status.length > 100 ? <div>Status length must be less 100 letters</div> : null}
                    </div>
                    <div>
                        <button type='submit'
                                disabled={status.length > 100}
                                className={classes.changeStatusBtn}
                                onClick={addStatus}>Change
                        </button>
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