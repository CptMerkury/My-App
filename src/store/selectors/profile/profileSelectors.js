
export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state) => {
    return state.profilePage.status
}

export const getUserIdSelector = (state) => {
    return state.auth.userId
}

export const checkAuthSelector = (state) => {
    return state.auth.isAuth
}

export const checkLoadingSelector = (state) => {
    return state.profilePage.isLoading
}

export const checkFetchingStatusSelector = (state) => {
    return state.profilePage.isFetchingStatus
}

/*
* future, create this selector, he must work with all simple selectors
* and into switch/case return all and new value from state
 */
// export const componentSelector = createSelector(
//     [],() => {
//
// })






