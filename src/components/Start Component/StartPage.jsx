import React from "react";
import classes from './StartPage.module.css'

const StartPage = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <h2 className={classes.headerGreeting}>Thank you for visiting.</h2>
                <h4 className={classes.headerLogin}>Login : <span>free@samuraijs.com</span></h4>
                <h4 className={classes.headerPass}>Password : <span>free</span></h4>
            </div>
            <div className={classes.disclaimer}>
                <h3 className={classes.disclaimerTitle}>DISCLAIMER</h3>
                <p className={classes.disclaimerDescr}>
                    <b>In Safari now not working authorized use other browser, sorry.</b><br/>
                    This is my template for SPA (Single Page Application). He has not complete functionality,
                    but give you opportunity to see how at work. On this application i use GitHub Pages.
                    For correct reloading page i use HashRouter. In order not to download full application i
                    use Lazy Loading (React.Suspense, React.Lazy). This application support ReduxDevTools,
                    you can see state and all dispatch working process.
                </p>
            </div>
            <div className={classes.stack}>
                <ul className={classes.stackList}>
                    <h3 className={classes.stackTitile}>Stack technology:</h3>
                    <li className={classes.stackItemTitle}>
                        <h4>UI/UX (User interface)</h4>
                    </li>
                    <ul>
                        <li className={classes.stackItem}>
                            React (Component and Function component, Life cycle methods, Hooks, HOC)
                        </li>
                        <li className={classes.stackItem}>
                            CSS (CSS modules)
                        </li>
                    </ul>
                    <li className={classes.stackItemTitle}>
                        <h4>BLL (Business logic layer)</h4>
                    </li>
                    <ul>
                        <li className={classes.stackItem}>Redux-Thunk (In future Redux-Saga)</li>
                        <li className={classes.stackItem}>Redux-Form (Custom Fields)</li>
                    </ul>
                    <li className={classes.stackItemTitle}>
                        <h4>DAL (Data access layer)</h4>
                    </li>
                    <ul>
                        <li className={classes.stackItem}>Rest API :&nbsp;
                            <a href="https://social-network.samuraijs.com/docs#">
                                https://social-network.samuraijs.com/docs#</a>
                        </li>
                        <li className={classes.stackItem}>AXIOS (Promise and Async/Await)</li>
                    </ul>
                    <li className={classes.stackItemTitle}>
                        <h4>Testing</h4>
                    </li>
                    <ul>
                        <li className={classes.stackItem}>
                            Jestjs.io
                        </li>
                    </ul>
                </ul>
                <div className={classes.opportunities}>
                    <ul className={classes.opportunitiesList}>
                        <h4 className={classes.opportunitiesTitle}>You can</h4>
                        <li className={classes.opportunitiesItemCan}>
                            Login / Logout - if you not authorized you can't visited Profile Page and Messages Page.
                        </li>
                        <li className={classes.opportunitiesItemCan}>
                            Change you avatar image - for faster work use small weight file.
                        </li>
                        <li className={classes.opportunitiesItemCan}>
                            Change you status - on page other user in function blocked.
                        </li>
                        <li className={classes.opportunitiesItem}>
                            Change information for you profile - redirect on settings page (in process).
                        </li>
                        <li className={classes.opportunitiesItem}>
                            Add information if you open for job (in process).
                        </li>
                        <li className={classes.opportunitiesItemCan}>
                            Write new post - without server, only local.
                        </li>
                        <li className={classes.opportunitiesItemCan}>
                            Write new messages - without server, only local.
                        </li>
                        <li className={classes.opportunitiesItemCan}>
                            Looking other user - all users is live person.
                        </li>
                        <li className={classes.opportunitiesItemCan}>
                            Enter on other user page.
                        </li>
                        <li className={classes.opportunitiesItemCan}>
                            You can follow/unfollow users.
                        </li>
                    </ul>
                    <ul className={classes.opportunitiesList}>
                        <h4 className={classes.opportunitiesTitle}>You can't</h4>
                        <li className={classes.opportunitiesItem}>
                            Registration in application.
                        </li>
                        <li className={classes.opportunitiesItem}>
                            Change password.
                        </li>
                        <li className={classes.opportunitiesItem}>
                            Change information on not owner page.
                        </li>
                        <li className={classes.opportunitiesItem}>
                            Look all following user.
                        </li>
                        <li className={classes.opportunitiesItem}>
                            Search user.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default StartPage