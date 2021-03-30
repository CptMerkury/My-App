import {AppStateType} from "../../store";

export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status
}

export const getUserIdSelector = (state: AppStateType) => {
    return state.auth.userId
}

export const checkAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth
}

export const checkLoadingSelector = (state: AppStateType) => {
    return state.profilePage.isLoading
}

export const checkFetchingStatusSelector = (state: AppStateType) => {
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






