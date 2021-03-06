import { createSelector } from 'reselect'

export const getUsersSelector = (state) => {
    return state.userPage.users
}

export const getPageSizeSelector = (state) => {
    return state.userPage.pageSize
}

export const getUsersLengthSelector = (state) => {
    return state.userPage.totalCount
}

export const getCurrantPageSelector = (state) => {
    return state.userPage.currentPage
}

export const checkLoadingSelector = (state) => {
    return state.userPage.isLoading
}

export const isUnUseBtnSelector = (state) => {
    return state.userPage.isDisabledBtn
}

// future, create this selector, he must work with all simple selectors
// and into switch/case return all and new value from state (maybe useSelector)
export const componentSelector = createSelector(
    [],() => {

})






