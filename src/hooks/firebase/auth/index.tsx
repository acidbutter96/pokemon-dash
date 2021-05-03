import React, { createContext, useContext, useEffect, useState } from 'react'

import { googleLogin } from '../config'

const AuthContext = createContext({} as IAuthContext)

interface IAuthContext {
    logWGoogle: () => void;
    signOut: () => void;
    isLogged: boolean;
}

const AuthContextProvider: React.FC = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(() => {
        const logged = (typeof localStorage.getItem('@pokemon-dash:user') === 'string' && localStorage.getItem('@pokemon-dash:user') !== '') || false

        setIsLogged(logged)
    }, [])

    const logWGoogle = () => {
        googleLogin()
            .then((auth) => {
                if (auth) {
                    localStorage.setItem('@pokemon-dash:user', auth?.user?.uid || '')
                    localStorage.setItem('@pokemon-dash:displayName', auth?.user?.displayName || '')

                    setIsLogged(true)
                }
            })
    }

    const signOut = () => {
        localStorage.clear()
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider
            value={{
                logWGoogle,
                isLogged,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)