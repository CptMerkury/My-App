import profileReducer, {addPostCreator, deletePostCreator} from "../store/reducers/profile/profileReducer";

let initState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 50},
        {id: 2, message: 'It`s my first post', likeCount: 40},
        {id: 3, message: 'Hi, how are you', likeCount: 30},
        {id: 4, message: 'How are you', likeCount: 20},
        {id: 5, message: 'Hi', likeCount: 10},
    ],
};

it('Length should be increment', () => {
    // 1. Test data
    let action = addPostCreator('Test success!')
    // 2. Action
    let newState = profileReducer(initState, action)
    // 3. Expectation
    expect(newState.posts.length).toBe(6)
});


it('Message should be correct', () => {
    // 1. Test data
    let action = addPostCreator('Test success!')
    // 2. Action
    let newState = profileReducer(initState, action)
    // 3. Expectation
    expect(newState.posts[5].message).toBe('Test success!')
});


it('Likes count should be equals 0', () => {
    // 1. Test data
    let action = addPostCreator('Test success!')
    // 2. Action
    let newState = profileReducer(initState, action)
    // 3. Expectation
    expect(newState.posts[5].likeCount).toBe(0)
});

it('Length should be decrement', () => {
    // 1. Test data
    let action = deletePostCreator(5)
    // 2. Action
    let newState = profileReducer(initState, action)
    // 3. Expectation
    expect(newState.posts.length).toBe(4)
});

it('Length not should be decrement, if id not correct', () => {
    // 1. Test data
    let action = deletePostCreator(1000)
    // 2. Action
    let newState = profileReducer(initState, action)
    // 3. Expectation
    expect(newState.posts.length).toBe(5)
});