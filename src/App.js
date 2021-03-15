import './App.css';
import React from 'react';
import {
    BrowserRouter,
    // HashRouter,
    Route,
    withRouter
} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import {InitializeApp} from "./store/thunk/app/initThunk";
import store from "./store/store";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/PtofileContainer";
import {Preloader} from "./components/common/preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import withSuspense from "./utils/hoc/lazyComponent";
import StartPage from "./components/Start Component/StartPage";

//Add lazy loading for not base component
const Login = React.lazy(() => import('./components/Login/Login'));
const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Setting = React.lazy(() => import('./components/Setting/Setting'));

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
                    <Route exact path='/'
                           render={() => <StartPage/>}/>
                    <Route
                        // Указываем не обязательный параметр :userId?
                        // чтобы если не '/profile', передать в state данные о uri строке
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={withSuspense(Login)}/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogContainer)}/>
                    <Route path='/news'
                           render={withSuspense(News)}/>
                    <Route path='/music'
                           render={withSuspense(Music)}/>
                    <Route path='/setting'
                           render={withSuspense(Setting)}/>
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
        //Change BrouserRouter on HashRouter for gh-pages
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <SocialAppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp