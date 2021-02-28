import React from 'react';
import {Route, withRouter} from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar/NavBar.jsx";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Setting/Setting";
import DialogContainer from "./Components/Dialogs/DialogContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/PtofileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitializeApp} from "./store/thunk/init";
import {Preloader} from "./Components/common/preloader";

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