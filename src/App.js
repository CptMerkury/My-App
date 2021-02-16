import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import NavBar from "./Components(UI)/NavBar/NavBar.jsx";
import News from "./Components(UI)/News/News";
import Music from "./Components(UI)/Music/Music";
import Setting from "./Components(UI)/Setting/Setting";
import DialogContainer from "./Components(UI)/Dialogs/DialogContainer";
import UsersContainer from "./Components(UI)/Users/UsersContainer";
import ProfileContainer from "./Components(UI)/Profile/PtofileContainer";
import HeaderContainer from "./Components(UI)/Header/HeaderContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar />
            <div className='app-wrapper-content'>
                <Route
                    // Указываем не обязательный параметр :userId?
                    // чтобы если не '/profile', передать в state данные о uri строке
                    path='/profile/:userId?'
                    render={() => <ProfileContainer />}
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
