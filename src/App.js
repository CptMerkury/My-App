import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Profile from "./Components/Profile/Ptofile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import Dialog from "./Components/Dialogs/Dialog";
import Friends from "./Components/Friends/Friends";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar userList={props.state.userList}/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile
                        dataPosts={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}
                />
                <Route
                    path='/dialogs'
                    render={() => <Dialog
                        dataDialog={props.state.dialogPage}
                        newMessageText={props.state.dialogPage.newMessageText}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}/>}
                />
                <Route path='/news'
                       render={() => <News/>}
                />
                <Route path='/music'
                       render={() => <Music/>}
                />
                <Route path='/setting'
                       render={() => <Setting/>}
                />
                <Route path='/friends'
                       render={() => <Friends userList={props.state.userList}/>}
                />
            </div>
        </div>
    );
}


export default App;
