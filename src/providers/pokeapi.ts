import axios from 'axios'

import {
    IPokemonType,
    IPokemonResults,
    IPokemon,
    IPokemonTypeResults,
} from '../hooks/pokemon'

import { capitalize } from '../utils/capitalize'
import {
    idFromTypesUrl,
    idFromPokemonUrl,
} from '../utils/typerequests'

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

interface IPokemonAllRequest {
    count: number;
    results: IPokemonResults[];
}

interface IPokemonTypeRequest {
    count: number;
    offset: number;
    limit: number;
    results: IPokemonTypeResults[];
}

interface IPokemonResponseItem {
    pokemon: {
        name: string;
        url: string;
        id: number;
    },
    slot: number;
};

interface IStat {
    name: string;
    url: string;
};

interface IStats {
    base_stat: number;
    effort: number;
    stat: IStat;
}

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})


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

export const getPokemonByType = async (id: number, offset: number = 0, limit: number = 6): Promise<IPokemonTypeRequest[]> => {
    try {
        const { data } = await api.get(`type/${id}`)

        const results: IPokemonTypeResults[] = data.pokemon.map((pokemon: IPokemonResponseItem) => ({
            id: parseInt(idFromPokemonUrl(pokemon.pokemon.url)),
            name: capitalize(pokemon?.pokemon.name),
            url: pokemon.pokemon.url,
            type: {
                id,
                name: capitalize(data?.name),
            }

        })).slice(offset, limit)

        const count: number = data.pokemon.length

        return [
            {
                count,
                offset,
                limit,
                results,
            }]
    } catch (err) {
        console.error(err)
        return []
    }

}

export const getAllPokemons = async (offset: number, limit: number = 6): Promise<IPokemonAllRequest[]> => {

    try {
        const { data } = await api.get(`pokemon?offset=${offset}&limit=${limit}`)

        const results: IPokemonResults[] = data.results.map((element: IPokeApiTypeResponse) => {
            return {
                id: parseInt(idFromPokemonUrl(element.url)),
                name: element.name,
                url: element.url,
            }
        })

        return [{
            count: data.count,
            results
        }]
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

export const getPokemonStats = async (id: number): Promise<IStats[]> => {
    try {
        const { data } = await api.get(`pokemon/${id}`)

        const response: IStats[] = data.stats

        return response
    } catch (err) {
        console.error(err)
        return []
    }
}