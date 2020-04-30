import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you', likeCount: 50},
    {id: 2, message: 'It`s my first post', likeCount: 20},
    {id: 3, message: 'Hi, how are you', likeCount: 10},
    {id: 4, message: 'How are you', likeCount: 5},
    {id: 5, message: 'Hi', likeCount: 50},
    {id: 6, message: 'Hello, anime!!!', likeCount: 40},
];
let dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Vova'},
    {id: 5, name: 'Andrew'},
    {id: 6, name: 'Vika'},
    {id: 7, name: 'Max'},
    {id: 8, name: 'Vova'},
    {id: 9, name: 'Andrew'},
    {id: 10, name: 'Vika'},
    {id: 11, name: 'Max'},
    {id: 12, name: 'Vova'},
    {id: 13, name: 'Andrew'},
    {id: 14, name: 'Vika'},
    {id: 15, name: 'Max'},
    {id: 16, name: 'Vova'},
    {id: 17, name: 'Andrew'},
    {id: 18, name: 'Vika'},
];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What`s Up'},
    {id: 3, message: 'How are you'},
    {id: 4, message: 'Hello'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Hi'},
    {id: 7, message: 'What`s Up'},
    {id: 8, message: 'How are you'},
    {id: 9, message: 'Hello'},
    {id: 10, message: 'Yo'},
    {id: 11, message: 'Hi'},
    {id: 12, message: 'What`s Up'},
    {id: 13, message: 'How are you'},
    {id: 14, message: 'Hello'},
    {id: 15, message: 'Yo'},
];

ReactDOM.render(
    <React.StrictMode>
        {<App posts={posts} dialogs={dialogs} messages={messages}/>}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
