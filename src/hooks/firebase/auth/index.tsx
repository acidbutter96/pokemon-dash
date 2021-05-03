import React, { createContext, useContext, useEffect, useState } from 'react'

import {
    googleLogin,
    createAndLogin,
    signOutFirebase,
} from '../config'

const AuthContext = createContext({} as IAuthContext)

interface IAuthContext {
    logWGoogle: () => void;
    signOut: () => void;
    isLogged: boolean;
    signInWEmail: (email: string, password: string) => void;
}

const AuthContextProvider: React.FC = ({ children }) => {
    const logged = (typeof localStorage.getItem('@pokemon-dash:user') === 'string' && localStorage.getItem('@pokemon-dash:user') !== '') || false

    const [isLogged, setIsLogged] = useState<boolean>(logged)

    const logWGoogle = () => {
        googleLogin()
            .then((auth) => {
                if (auth) {
                    localStorage.setItem('@pokemon-dash:user', auth?.user?.uid || '')
                    localStorage.setItem('@pokemon-dash:displayName', auth?.user?.displayName || '')

                    setIsLogged(true)

                    window.location.pathname = '/'
                }
            })
    }

    const signInWEmail = (email: string, password: string) => {
        createAndLogin(email, password)
            .then(auth => {
                if (auth) {
                    localStorage.setItem('@pokemon-dash:user', auth?.user?.uid || '')
                    localStorage.setItem('@pokemon-dash:displayName', auth?.user?.displayName || '')

                    setIsLogged(true)

                    window.location.pathname = '/'
                }
            })
    }

    const signOut = () => {
        signOutFirebase().then((element) => {
            if (isLogged && element) {
                localStorage.clear()
                setIsLogged(false)
            }
        })
    }

    return (
        <AuthContext.Provider
            value={{
                logWGoogle,
                isLogged,
                signOut,
                signInWEmail,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)