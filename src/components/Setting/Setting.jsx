import React from "react";
import classes from "./Setting.module.css"
import InfoBlockForm from "./InfoBlock/InfoBlockForm";

const Setting = ({...props}) => {
    return (
        <div className={classes.settingContainer}>
            <h2>Setting</h2>
            <div>
                <h3>Change your information:</h3>
                <InfoBlockForm/>
            </div>
        </div>
    )
};

export default Setting