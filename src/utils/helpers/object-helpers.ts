import {UserType} from "../../store/types/@types";

type UpdateObjectInArrayType = (
    items: Array<UserType>,
    itemID: number,
    objPropsName: keyof UserType,
    newObjProps: {
        followed: boolean
    }) => Array<UserType>

export const UpdateObjectInArray: UpdateObjectInArrayType = (
    items,
    itemID,
    objPropsName,
    newObjProps
): Array<UserType> => items.map((user) => {

    if (user[objPropsName] === itemID) {
        return {
            ...user, ...newObjProps
        } as UserType
    }
    return user
})
