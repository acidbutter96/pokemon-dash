import React, { createContext, useState, useEffect, useContext } from 'react'
import { api, getAllPokemons, getPokemonInfo, getType } from '../../providers/pokeapi'

interface IPokemonContext {
    typeId: number;
    typeArray: IPokemonType[];
    setType: (id: number) => void;
    pokemonArray: IPokemonResults[];
}

export interface IPokemonType {
    id: number;
    name: string;
    url: string;
}

export interface IPokemonResults {
    id: number;
    name: string;
    url: string;
}

export interface IPokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        slot: string;
        name: string;
        id: number;
    }[]
}

export const PokemonContext = createContext({} as IPokemonContext)

const PokemonContextProvider: React.FC = ({ children }) => {
    const [typeId, setTypeId] = useState<number>(0)
    const [typeArray, setTypeArray] = useState<IPokemonType[]>([{ id: -1, name: '', url: '' }])
    const [pokemonArray, setPokemonArray] = useState<IPokemonResults[]>([])

    const setType = (id: number): void => {
        if (typeId !== id) {
            setTypeId(id)
        }
    }

    useEffect(() => {
        getType()
            .then((response) => setTypeArray(response))
        getAllPokemons(6, 6)
            .then((response) => setPokemonArray(response))
    }, [])

    useEffect(() => {
        //console.log(pokemonArray[0].pokemon)
    }, [pokemonArray])

    useEffect(() => {
        //console.log(typeId)
    }, [typeId])

    return (
        <PokemonContext.Provider
            value={{
                typeId,
                typeArray,
                setType,
                pokemonArray,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider

export const usePokemon = () => useContext(PokemonContext)