import './App.css';
import React from 'react';
import {
    HashRouter,
    Route,
    withRouter
} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import {InitializeApp} from "./store/thunk/app/initThunk";
import store, {AppStateType} from "./store/store";

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

type PropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    InitializeApp: () => void
}
class App extends React.Component<PropsType & MapDispatchToPropsType> {
    catchAllUnhandledError: () => void = () => {
        alert('Some error occurred')
    }

    componentDidMount() {
        this.props.InitializeApp()
        window.addEventListener('Unhandled rejection', this.catchAllUnhandledError)
    }

    componentWillUnmount() {
        window.removeEventListener('Unhandled rejection', this.catchAllUnhandledError)
    }

    render() {
        if (!this.props.initialized) {
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

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

/*  Делаем контейнерную компоненту для App, чтобы можно было протестировать ее отрисовку через test */
const SocialAppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {InitializeApp}),
    withRouter
)(App);

const SocialApp: React.FC = () => {
    return (
        /* Use HashRouter for gh-pages */
        <HashRouter>
            <Provider store={store}>
                <SocialAppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SocialApp