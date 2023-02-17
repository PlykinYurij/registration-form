export interface RegisrtationFields {
    status: string
    city: string
    password: string
    checkPassword: string
    email: string
    subscription: boolean
}

export interface InputProps {
    register: any
    type: string
    validation: object
    errors: any
    title: string
    description: string
    name: string
}

interface ICitiesObject {
    city: string
    population: number
}

export interface ISelectProps {
    title: string
    description?: string
    register: any
    name: string
    options: ICitiesObject[]
}

export interface IHeader {
    title: string
    description: string
    name: string
}

export interface ICitiesJson {
    city: string
    population: number
}

export interface IStatusForm {
    register: any
    type: string
    title?: string
    description?: string
    name: string
    statusText: string
}

export interface ICheckboxForm {
    register: any
    type: string
    title: string
    description: string
    name: string
}