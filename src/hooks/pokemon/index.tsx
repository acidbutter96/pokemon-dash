import React, { createContext, useState, useEffect, useContext } from 'react'
import { api, getType } from '../../providers/pokeapi'

interface IPokemonContext {
    typeId: number;
    typeArray: IPokemonType[];
    setType: (id: number) => void;
}

export interface IPokemonType {
    id: number;
    name: string;
    url: string;
}

const PokemonContext = createContext({} as IPokemonContext)

const PokemonContextProvider: React.FC = ({ children }) => {
    const [typeId, setTypeId] = useState<number>(0)
    const [typeArray, setTypeArray] = useState<IPokemonType[]>([{ id: -1, name: '', url: '' }])

    const setType = (id: number): void => {
        if (typeId !== id) {
            setTypeId(id)
        }
    }

    useEffect(() => {
        getType()
            .then((response) => setTypeArray(response))
    }, [])

    /* useEffect(() => {
        console.log('type has changed')
    }, [typeId]) */

    return (
        <PokemonContext.Provider
            value={{
                typeId,
                typeArray,
                setType,
            }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider

export const usePokemon = () => useContext(PokemonContext)