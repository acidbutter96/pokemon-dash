import React, { createContext, useContext } from 'react'

interface IAuthContext {
    isLogged: boolean;
}

const AuthContext = createContext({} as IAuthContext)

const AuthContextProvider: React.FC = ({ children }) => {
    return (
        <AuthContext.Provider
            value={{
                isLogged: false,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)