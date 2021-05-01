import React, { createContext, useState, useEffect, useContext } from 'react'
import { getAllPokemons, getType } from '../../providers/pokeapi'

interface IPokemonContext {
    typeId: number;
    typeArray: IPokemonType[];
    setType: (id: number) => void;
    pokemonArray: IPokemonResults[];
    setPage: (num: number) => void;
    activePage: number;
    pageCounter: number;
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

const PokemonContext = createContext({} as IPokemonContext)

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
        getAllPokemons(0, 6)
            .then((response) => {
                setPokemonArray(response[0].results)
                setPageCounter(response[0].count)
            })
    }, [])

    useEffect(() => {
        //console.log(pokemonArray[0].pokemon)
    }, [pokemonArray])

    useEffect(() => {
        //console.log(typeId)
    }, [typeId])

    /* paginator */

    const [activePage, setActivePage] = useState<number>(0)
    const [pageCounter, setPageCounter] = useState<number>(0)

    useEffect(() => {
        getAllPokemons(activePage * 6, 6)
            .then((response) => setPokemonArray(response[0].results))
    }, [activePage])

    const setPage = (num: number) => {
        setActivePage(num)
    }

    return (
        <PokemonContext.Provider
            value={{
                typeId,
                typeArray,
                setType,
                pokemonArray,
                setPage,
                activePage,
                pageCounter,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider

export const usePokemon = () => useContext(PokemonContext)