export type ValidateTypes = (value: string) => string | undefined

export const required: ValidateTypes = (value) => (value ? undefined : 'Required')

export const maxLength = (max: number): ValidateTypes => (value) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = (min: number): ValidateTypes => (value) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minValue = (min: number): ValidateTypes => (value) =>
    value && value.length < min ? `Must be at least ${min}` : undefined
