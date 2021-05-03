import React, { createContext, useContext } from 'react'

interface IFireStoreContext {
    test: number;
}

const FireStoreContext = createContext({} as IFireStoreContext)

const FireStoreProvider: React.FC = ({ children }) => {
    return (
        <FireStoreContext.Provider
            value={{
                test: 0,
            }}
        >
            {children}
        </FireStoreContext.Provider>
    )
}

export default FireStoreProvider

export const useFireStore = () => useContext(FireStoreContext)