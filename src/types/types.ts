export interface IRegistrationFields {
    status: string
    city: string
    password: string
    checkPassword?: string
    email: string
    subscription: boolean
}


export interface ICities {
    city: string
    population: number
}

export interface ICitiesDto {
    city: string
    population: string
}