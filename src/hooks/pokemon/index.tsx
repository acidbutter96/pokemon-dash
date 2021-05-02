import React, { createContext, useState, useEffect, useContext } from 'react'
import { getAllPokemons, getType, getPokemonByType } from '../../providers/pokeapi'

interface IPokemonContext {
    typeId: number;
    typeArray: IPokemonType[];
    setType: (id: number) => void;
    pokemonArray: IPokemonResults[];
    setPage: (num: number) => void;
    activePage: number;
    pageCounter: number;
    pokemonArrayType: IPokemonTypeResults[];
    setSearch: (query: string) => void;
    setFirstSearch: () => void;
    returnedData: IPokemonType[];
    searchIsEmpty: boolean;
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

export interface IPokemonTypeResults {
    id: number;
    name: string;
    url: string;
    type: {
        id: number,
        name: string;
    };
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
    }[];
}

const PokemonContext = createContext({} as IPokemonContext)

const PokemonContextProvider: React.FC = ({ children }) => {
    const [typeId, setTypeId] = useState<number>(0)
    const [typeArray, setTypeArray] = useState<IPokemonType[]>([{ id: -1, name: '', url: '' }])
    const [pokemonArray, setPokemonArray] = useState<IPokemonResults[]>([])
    const [pokemonArrayType, setPokemonArrayType] = useState<IPokemonTypeResults[]>([])

    useEffect(() => {
        getType()
            .then((response) => setTypeArray(response))
        getAllPokemons(0, 6)
            .then((response) => {
                setPokemonArray(response[0].results)
                setCountItems(response[0].count)
                console.log(response[0].count)
            })
    }, [])

    useEffect(() => {
        if (typeId !== 0) {
            getPokemonByType(typeId).then((response) => {
                setPokemonArrayType(response[0].results)
                setCountItems(response[0].count)
            })
        }
    }, [typeId])

    /* paginator */

    const [activePage, setActivePage] = useState<number>(0)
    const [countItems, setCountItems] = useState<number>(0)
    const [pageCounter, setPageCounter] = useState<number>(countItems / 6)

    useEffect(() => {
        setPageCounter(countItems / 6)
    }, [countItems])

    useEffect(() => {
        if (pokemonArrayType.length === 0) {
            getAllPokemons(activePage * 6)
                .then((response) => setPokemonArray(response[0].results))
        } else {
            getPokemonByType(typeId, activePage * 6, activePage * 6 + 6)
                .then((response) => setPokemonArrayType(response[0].results))
        }
    }, [activePage])

    /* searchbar */
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchPokemonData, setSearchPokemonData] = useState<IPokemonResults[]>([])
    const [returnedData, setReturnedData] = useState<IPokemonResults[]>([])
    const [searchIsEmpty, setSearchIsEmpty] = useState<boolean>(true)

    useEffect(() => {
        if (searchQuery.length > 2) {
            setReturnedData(searchPokemonData.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
            }))
            setSearchIsEmpty(false)
        } else {
            setSearchIsEmpty(true)
        }
    }, [searchQuery])

    /* context methods */
    const setPage = (num: number) => {
        if (typeId === 0) {
            setActivePage(num)
        } else {
            setActivePage(num)
        }
    }

    const setType = (id: number): void => {
        if (typeId !== id) {
            setTypeId(id)
        }
    }

    const setSearch = (query: string): void => setSearchQuery(query || '')

    const setFirstSearch = (): void => {
        if (searchPokemonData.length === 0) {
            getAllPokemons(0, countItems)
                .then((response) => {
                    setSearchPokemonData(response[0].results)
                })
        }
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
                pokemonArrayType,
                setSearch,
                setFirstSearch,
                returnedData,
                searchIsEmpty,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider

export const usePokemon = () => useContext(PokemonContext)