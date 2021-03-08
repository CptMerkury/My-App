import './App.css';
import React from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import {InitializeApp} from "./store/thunk/app/initThunk";
import store from "./store/store";

import {Preloader} from "./components/common/preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/PtofileContainer";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";

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
                           render={() => <Login/>}/>
                    <Route
                        // Указываем не обязательный параметр :userId?
                        // чтобы если не '/profile', передать в state данные о uri строке
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}/>
                    <Route
                        path='/dialogs'
                        render={() => <DialogContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/setting'
                           render={() => <Setting/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    init: state.app.initialized
})

//Делаем контейнерную компоненту для App, чтобы можно было протестировать ее отрисовку через test
const SocialAppContainer = compose(
    connect(mapStateToProps, {InitializeApp}),
    //Мы обернули компоненту дополнительно withRoute,
    // так как при использовании Route с классовыми компонентами,
    // Route может работать не корректно
    withRouter
)(App);

const SocialApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <SocialAppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp