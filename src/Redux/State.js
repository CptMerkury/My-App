let rerenderEntireTree = () => {
    console.log('Render')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likeCount: 50},
            {id: 2, message: 'It`s my first post', likeCount: 20},
            {id: 3, message: 'Hi, how are you', likeCount: 10},
            {id: 4, message: 'How are you', likeCount: 5},
            {id: 5, message: 'Hi', likeCount: 50},
        ],
        newPostText: 'Add your new post'
    },
    dialogPage: {
        dialogs: [
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
        newMessageText: 'Write your new message'
    }
}

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ' ';
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 11,
        message: state.dialogPage.newMessageText
    }
    state.dialogPage.messages.push(newMessage)
    state.dialogPage.newMessageText = ' ';
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogPage.newMessageText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;