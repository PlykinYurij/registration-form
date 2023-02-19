import { ICityDto } from './../types/types';

export const fetchCities = async (): Promise<ICityDto[]> => {
    const response = await fetch("./cities.json")
    const cities = await response.json()

    return cities
}