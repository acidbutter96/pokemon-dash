import React, { createContext, useContext } from 'react'

import { database } from '../config'

interface IFireStoreContext {
    getData: () => Promise<any>;
    savePokemon: (pokemonId: string) => void;
}

const FireStoreContext = createContext({} as IFireStoreContext)

const FireStoreProvider: React.FC = ({ children }) => {

    const savePokemon = (pokemonId: string): void => {
        const userId = localStorage.getItem('@pokemon-dash:user')

        if (userId) {
            database
                .collection('pokedex')
                .doc(userId)
                .get()
                .then(element => {
                    if (element.data()) {
                        let newPokedex = element.data()?.pokedex
                        newPokedex.push(
                            {
                                date: new Date().toISOString(),
                                pokemonId,
                            })

                        database
                            .collection('pokedex')
                            .doc(userId)
                            .set({
                                pokedex: newPokedex,
                            })
                            .then(() => {
                                window.location.pathname = '/pokedex'

                                return
                            })
                    }
                })
        } else {
            window.location.pathname = '/login'
        }
    }

    const getData = async (): Promise<any> => {
        const userId = localStorage.getItem('@pokemon-dash:user')

        try {
            if (userId) {
                const document = await database
                    .collection('pokedex')
                    .doc(userId)
                    .get()

                return document.data()
            }
        } catch (err) {
            return err
        }
    }

    return (
        <FireStoreContext.Provider
            value={{
                getData,
                savePokemon,
            }}
        >
            {children}
        </FireStoreContext.Provider>
    )
}

export default FireStoreProvider

export const useFireStore = () => useContext(FireStoreContext)