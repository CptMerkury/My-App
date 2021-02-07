let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likeCount: 50},
                {id: 2, message: 'It`s my first post', likeCount: 20},
                {id: 3, message: 'Hi, how are you', likeCount: 10},
                {id: 4, message: 'How are you', likeCount: 5},
                {id: 5, message: 'Hi', likeCount: 50},
            ],
            newPostText: String,
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Max'},
                {id: 4, name: 'Vova'},
                {id: 5, name: 'Andrew'},
            ],
            messages: [
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
            ],
            newMessageText: String
        },
        userList: {
            users: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Max'},
            ],
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('Change state')
    },
    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: this._state.dialogPage.messages.length + 1,
            message: this._state.dialogPage.newMessageText
        }
        this._state.dialogPage.messages.push(newMessage)
        this._state.dialogPage.newMessageText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogPage.newMessageText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

window.store = store;

export default store;