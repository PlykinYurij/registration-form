export interface IRegistrationFormFields {
    status: string
    city: string
    password: string
    checkPassword?: string
    email: string
    subscription: boolean
}


export interface ICity {
    city: string
    population: number
}

export interface ICityDto {
    city: string
    population: string
}