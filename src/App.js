import './App.css';
import React from 'react';
import {
    // BrowserRouter,
    HashRouter,
    Route,
    withRouter
} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import {InitializeApp} from "./store/thunk/app/initThunk";
import store from "./store/store";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/PtofileContainer";
import Setting from "./components/Setting/Setting";
import {Preloader} from "./components/common/preloader/spinner";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import withSuspense from "./utils/hoc/lazyComponent";
import StartPage from "./components/Start Component/StartPage";
import {Switch} from "react-router";

/* Add lazy loading for not base component */
const Login = React.lazy(() => import('./components/Login/Login'));
const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {
    catchAllUnhandledError = (reason, promise) => {
        alert('Some error occurred')
        console.error(promise, reason)
    }

    componentDidMount() {
        this.props.InitializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledError)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledError)
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
                    <Switch>
                        <Route
                            /*
                            * Указываем не обязательный параметр :userId?
                            * чтобы если не '/profile', передать в state данные о uri строке
                            */
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
                        <Route exact path='/'
                               render={() => <StartPage/>}/>
                        <Route path='*'
                               render={() => <div>404 Not Founded</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    init: state.app.initialized
})

/*  Делаем контейнерную компоненту для App, чтобы можно было протестировать ее отрисовку через test */
const SocialAppContainer = compose(
    connect(mapStateToProps, {InitializeApp}),
    /*
    * Мы обернули компоненту дополнительно withRoute,
    * так как при использовании Route с классовыми компонентами,
    * Route может работать не корректно
    */
    withRouter
)(App);

const SocialApp = () => {
    return (
        /* Use HashRouter for gh-pages */
        <HashRouter>
            {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
            <Provider store={store}>
                <SocialAppContainer/>
            </Provider>
            {/*</BrowserRouter>*/}
        </HashRouter>
    )
}

export default SocialApp