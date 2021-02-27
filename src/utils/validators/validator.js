export const required = value => {
    if (!value) return 'error msg'

    return undefined
}

export const maxLength = (max) => (value) => {
    if (value && value.length > max) return `Max length ${max} symbols`
    return undefined
}

export const minLength = (min) => (value) => {
    if (value && value.length < min) return `Min length ${min} symbols`
    return undefined
}
