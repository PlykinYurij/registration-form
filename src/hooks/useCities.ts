import { fetchCities } from './../api/api';
import { ICitiesDto, ICities } from './../types/types';
import { useState, useEffect } from 'react';

export const useCities = () => {
    const [cities, setCities] = useState<ICities[]>([])

    useEffect(() => {
        fetchCities().then((cities: ICitiesDto[]) => {
            const convertedCities = convertCities(cities)
            const filteredAndSortedCities = getFilteredAndSortedCities(convertedCities)

            setCities(filteredAndSortedCities)
        })
    }, [])

    return { cities }
}

function convertCities(cities: ICitiesDto[]): ICities[] {
    return cities.map(city => {
        return {
            ...city,
            population: Number(city.population)
        }
    })
}

function getFilteredAndSortedCities(cities: ICities[]): ICities[] {
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