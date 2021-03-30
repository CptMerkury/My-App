import {AppStateType} from "../../store";

export const getUsersSelector = (state: AppStateType) => {
    return state.userPage.users
}

export const getPageSizeSelector = (state: AppStateType) => {
    return state.userPage.pageSize
}

export const getUsersLengthSelector = (state: AppStateType) => {
    return state.userPage.totalCount
}

export const getCurrantPageSelector = (state: AppStateType) => {
    return state.userPage.currentPage
}

export const checkLoadingSelector = (state: AppStateType) => {
    return state.userPage.isLoading
}

export const isUnUseBtnSelector = (state: AppStateType) => {
    return state.userPage.isDisabledBtn
}

/*
 * future, create this selector, he must work with all simple selectors
 * and into switch/case return all and new value from state (maybe useSelector)
*/
// export const componentSelector = createSelector(
//     [],() => {
//
// })






