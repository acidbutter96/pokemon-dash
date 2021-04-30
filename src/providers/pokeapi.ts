import axios from 'axios'
import { IPokemonType } from '../hooks/pokemon'
import { capitalize } from '../utils/capitalize'
import { idFromTypesUrl } from '../utils/typerequests'

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

export const getType = async (): Promise<IPokemonType[]> => {
    const { data } = await api.get('type')

    try {
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