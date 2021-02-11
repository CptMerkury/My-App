import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Profile from "./Components/Profile/Ptofile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogContainer from "./Components/Dialogs/DialogContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar />
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile />}
                />
                <Route
                    path='/dialogs'
                    render={() => <DialogContainer />}
                />
                <Route path='/users'
                       render={() => <UsersContainer />}
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
            </div>
        </div>
    );
}


export default App;
