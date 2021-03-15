import React from "react";

const StartPage = () => {
    return (
        <div>
            <div>
                <h2>Hello, thank you for visiting.</h2>
                <h4>Login : free@samuraijs.com</h4>
                <h4>Password : free</h4>
            </div>
            <div>
                <h3>DISCLAIMER</h3>
                <p>
                    This is my template for SPA (Single Page Application). He has not complete functionality,
                    but give you opportunity to see how at work. On this application i use GitHub Pages.
                    For correct reloading page i use HashRouter. In order not to download full application i
                    use Lazy Loading (React.Suspense, React.Lazy). This application support ReduxDevTools,
                    you can see state and all dispatch working process.
                </p>
                <hr/>
                <p>Stack of this application&nbsp;:</p>
                <ul>
                    <li><h4>UI/UX (User interface)</h4></li>
                    <ul>
                        <li>React (Component and Function component, Life cycle methods, Hooks, HOC)</li>
                        <li>CSS (CSS modules)</li>
                    </ul>
                    <li><h4>BLL (Business logic layer)</h4></li>
                    <ul>
                        <li>Redux-Thunk (In future Redux-Saga)</li>
                        <li>Redux-Form (Custom Fields)</li>
                    </ul>
                    <li><h4>DAL (Data access layer)</h4></li>
                    <ul>
                        <li>Rest API (<a href="https://social-network.samuraijs.com/docs#">
                            https://social-network.samuraijs.com/docs#
                        </a>)
                        </li>
                        <li>AXIOS (Promise and Async/Await)</li>
                    </ul>
                </ul>
                <hr/>
                <div>
                    <h4>You can:</h4>
                    <ul>
                        <li>Login / Logout - if you not authorized you can't visited Profile Page and Messages Page.</li>
                        <li>Change you avatar image - for faster work use small weight file.</li>
                        <li>Change you status - on page other user in function blocked.</li>
                        <li>Change information for you profile - redirect on settings page.</li>
                        <li>Add information if you open for job.</li>
                        <li>Write new post - without server, only local.</li>
                        <li>Write new messages - without server, only local.</li>
                        <li>Looking other user - all users is live person.</li>
                        <li>Enter on other user page</li>
                        <li>You can follow/unfollow users.</li>
                    </ul>
                    <h4>You can't:</h4>
                    <ul>
                        <li>Change password</li>
                        <li>Change information on not owner page</li>
                        <li>Look all following user</li>
                        <li>Search user</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default StartPage