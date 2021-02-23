import React from 'react'
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        console.log('render')
        return (
            <div className={classes.statusBlock}>
                {!this.state.editMode
                    ? <div className={classes.statusDescr}>
                        <p onClick={this.onEditMode}>{this.props.status || 'Not indicated'}</p>
                    </div>
                    : <div className={classes.statusDescr}>
                        <input
                            onChange={this.onChangeStatus}
                            autoFocus={true}
                            onBlur={this.offEditMode}
                            placeholder={'Change status'}
                            value={this.state.status}
                        />
                        <button className={classes.changeStatusBtn} onClick={this.offEditMode}>Change</button>
                    </div>
                }
                <div className={classes.bubble2}/>
                <div className={classes.bubble1}/>
            </div>
        )
    }
}

export default ProfileStatus