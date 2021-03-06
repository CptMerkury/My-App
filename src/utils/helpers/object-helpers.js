export const UpdateObjectInArray = (items, itemID, objPropsName, newObjProps) => {
    return items.map(user => {
        if (user[objPropsName] === itemID) {
            return {
                ...user, ...newObjProps
            }
        }
        return user
    })
}
//Так это было в reducers
// users: state.users.map(user => {
//     if (user.id === action.payload) {
//         return {
//             ...user,
//             followed: false
//         }
//     }
//     return user
// })