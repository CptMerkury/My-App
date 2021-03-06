import React from 'react';
import {Route, withRouter} from "react-router-dom";
import './App.css';

import {connect} from "react-redux";
import {compose} from "redux";
import {InitializeApp} from "./store/thunk/init";

import {Preloader} from "./view/components/common/preloader";
import HeaderContainer from "./view/components/Header/HeaderContainer";
import NavBar from "./view/components/NavBar/NavBar";
import Login from "./view/components/Login/Login";
import ProfileContainer from "./view/components/Profile/PtofileContainer";
import DialogContainer from "./view/components/Dialogs/DialogContainer";
import UsersContainer from "./view/components/Users/UsersContainer";
import News from "./view/components/News/News";
import Music from "./view/components/Music/Music";
import Setting from "./view/components/Setting/Setting";

class App extends React.Component {
    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {
        if (!this.props.init) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/login'
                           render={() => <Login/>}
                    />
                    <Route
                        // Указываем не обязательный параметр :userId?
                        // чтобы если не '/profile', передать в state данные о uri строке
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path='/dialogs'
                        render={() => <DialogContainer/>}
                    />
                    <Route path='/users'
                           render={() => <UsersContainer/>}
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
}

const mapStateToProps = (state) => ({
    init: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {InitializeApp}),
    //Мы обернули компоненту дополнительно withRoute,
    // так как при использовании Route с классовыми компонентами,
    // Route может работать не корректно
    withRouter
)(App);