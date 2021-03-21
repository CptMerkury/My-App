// import profileReducer from "./reducers/profile/profileReducer";
// import dialogsReducer from "./reducers/dialogs/dialogsReducer";
// import sidebarReducer from "./reducers/sidebar/sidebarReducer";
//
// let localStore = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you', likeCount: 50},
//                 {id: 2, message: 'It`s my first post', likeCount: 20},
//                 {id: 3, message: 'Hi, how are you', likeCount: 10},
//                 {id: 4, message: 'How are you', likeCount: 5},
//                 {id: 5, message: 'Hi', likeCount: 50},
//             ],
//             newPostText: String,
//         },
//         dialogPage: {
//             dialogs: [
//                 {id: 1, name: 'Ivan'},
//                 {id: 2, name: 'Dima'},
//                 {id: 3, name: 'Max'},
//                 {id: 4, name: 'Vova'},
//                 {id: 5, name: 'Andrew'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'What`s Up'},
//                 {id: 3, message: 'How are you'},
//                 {id: 4, message: 'Hello'},
//                 {id: 5, message: 'Yo'},
//                 {id: 6, message: 'Hi'},
//                 {id: 7, message: 'What`s Up'},
//                 {id: 8, message: 'How are you'},
//                 {id: 9, message: 'Hello'},
//                 {id: 10, message: 'Yo'},
//             ],
//             newMessageText: String
//         },
//         sidebar: {
//             userList: [
//                 {id: 1, name: 'Ivan'},
//                 {id: 2, name: 'Dima'},
//                 {id: 3, name: 'Max'},
//             ],
//         }
//     },
//     _callSubscriber() {
//         console.log('Change state')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber(this._state)
//     }
// }
//
// // export default localStore;