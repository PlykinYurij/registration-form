import { ICitiesDto } from './../types/types';

export const fetchCities = async (): Promise<ICitiesDto[]> => {
    const response = await fetch("./cities.json")
    const cities = await response.json()

    return cities
}