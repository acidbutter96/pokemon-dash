import React, { createContext, useContext, useEffect, useState } from 'react'

import {
    googleLogin,
    createAndLogin,
    signOutFirebase,
    emailLogin,
} from '../config'

const AuthContext = createContext({} as IAuthContext)

interface IAuthContext {
    logWGoogle: () => void;
    signOut: () => void;
    isLogged: boolean;
    logWEmail: (email: string, password: string) => void;
    signInWEmail: (email: string, password: string) => void;
    loginError: string;
}

const AuthContextProvider: React.FC = ({ children }) => {
    const logged = (typeof localStorage.getItem('@pokemon-dash:user') === 'string' && localStorage.getItem('@pokemon-dash:user') !== '') || false

    const [isLogged, setIsLogged] = useState<boolean>(logged)
    const [loginError, setLoginError] = useState<string>('')

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

    const logWEmail = (email: string, password: string) => {
        setLoginError('')
        emailLogin(email, password)
            .then(auth => {
                setTimeout(() => {
                    if (auth.user) {
                        localStorage.setItem('@pokemon-dash:user', auth?.user?.uid || '')
                        localStorage.setItem('@pokemon-dash:displayName', auth?.user?.displayName || '')

                        setIsLogged(true)

                        window.location.pathname = '/'
                    } else {
                        switch (auth.code) {
                            case 'auth/wrong-password':
                                setLoginError('Senha incorreta')
                                break
                            case 'auth/user-not-found':
                                setLoginError('Usuário não encontrado')
                                break
                            case 'auth/user-disabled':
                                setLoginError('Usuário desativado')
                                break
                            case 'auth/invalid-email':
                                setLoginError('E-mail inválido')
                                break
                            default:
                                break
                        }
                    }
                }, (500))
            })
            .catch(err => console.log(err))
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
                logWEmail,
                signInWEmail,
                loginError,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)