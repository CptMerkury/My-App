import React from 'react'
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    onEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    offEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div className={classes.statusBlock}>
                {!this.state.editMode
                    ? <div className={classes.statusDescr}>
                        <p onDoubleClick={this.onEditMode}>... {!this.props.status ? 'Not indicated' : this.props.status}</p>
                    </div>
                    : <div className={classes.statusDescr}>
                        <input
                            autoFocus={true}
                            onBlur={this.offEditMode}
                            placeholder={!this.props.status ? 'Change status' : this.props.status}
                        />
                    </div>
                }
                <div className={classes.bubble2}/>
                <div className={classes.bubble1}/>
            </div>
        )
    }
}

export default ProfileStatus