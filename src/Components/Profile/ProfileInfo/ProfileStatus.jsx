import React from 'react'
import classes from "./ProfileInfo.module.css";
import StatusReduxForm from "./StatusForm";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    addStatus = (value) => {
        this.setState({
            status: value.body,
            editMode: false,
        })
        this.props.updateStatus(value.body)
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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={classes.statusBlock}>
                {!this.state.editMode
                    ? <div className={classes.statusDescr} onClick={this.onEditMode}>
                        <p>{this.props.status || 'Not indicated'}</p>
                    </div>
                    : <div onDoubleClick={this.offEditMode}>
                        <StatusReduxForm onSubmit={this.addStatus} offEdit={this.offEditMode}/>
                    </div>
                }
                <div className={classes.bubble2}/>
                <div className={classes.bubble1}/>
            </div>
        )
    }
}

export default ProfileStatus