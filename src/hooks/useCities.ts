import { fetchCities } from './../api/api';
import { ICityDto, ICity } from './../types/types';
import { useState, useEffect } from 'react';

export const useCities = () => {
    const [cities, setCities] = useState<ICity[]>([])

    useEffect(() => {
        fetchCities().then((cities: ICityDto[]) => {
            const convertedCities = convertCities(cities)
            const filteredAndSortedCities = getFilteredAndSortedCities(convertedCities)

            setCities(filteredAndSortedCities)
        })
    }, [])

    return { cities }
}

function convertCities(cities: ICityDto[]): ICity[] {
    return cities.map(city => {
        return {
            ...city,
            population: Number(city.population)
        }
    })
}

function getFilteredAndSortedCities(cities: ICity[]): ICity[] {
    const result = []
    const cityWhithMaxPopulation = cities.reduce((acc, curr) => {
        return acc.population > curr.population ? acc : curr
    })

    result.push(cityWhithMaxPopulation)

    cities
        .filter(city => city.population !== cityWhithMaxPopulation.population 
            && city.population > 50000)
        .sort((a, b) => a.city.localeCompare(b.city))
        .forEach(city => result.push(city))
    return result
}