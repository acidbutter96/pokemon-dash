import axios from 'axios'

import {
    IPokemonType,
    IPokemonResults,
    IPokemon,
} from '../hooks/pokemon'

import { capitalize } from '../utils/capitalize'
import {
    idFromTypesUrl,
    idFromPokemonUrl,
} from '../utils/typerequests'

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

interface IPokeApiTypeResponse {
    count: number;
    next: string;
    previous: number;
    name: string;
    url: string;
    results: {
        name: string;
        url: string;
    }[];
}

export const getType = async (): Promise<IPokemonType[]> => {

    try {
        const { data } = await api.get('type')
        const response: IPokemonType[] = data.results.map((element: IPokemonType) => {
            return {
                ...element,
                id: parseInt(idFromTypesUrl(element.url)),
                name: capitalize(element.name),
            }
        })

        return response
    } catch (err) {
        console.error(err)
        return []
    }
}

export const getAllPokemons = async (offset: number, limit: number = 6): Promise<IPokemonResults[]> => {

    try {
        const { data } = await api.get(`pokemon?offset=${offset}&limit=${limit}`)

        const response: IPokemonResults[] = data.results.map((element: IPokeApiTypeResponse) => {
            return {
                id: parseInt(idFromPokemonUrl(element.url)),
                name: element.name,
                url: element.url,
            }
        })

        return response
    } catch (err) {
        console.error(err)
        return []
    }
}

export const getPokemonInfo = async (id: number): Promise<IPokemon[]> => {

    try {
        const { data } = await api.get(`pokemon/${id}`)

        const response: IPokemon[] = [{
            name: data.name,
            sprites: {
                front_default: data.sprites.front_default,
            },
            types: data.types.map((element: any) => ({
                slot: element.slot,
                name: element.type.name,
                id: idFromPokemonUrl(element.type.url),
            })),
        }]

        return response
    } catch (err) {
        console.error(err)
        return []
    }
}