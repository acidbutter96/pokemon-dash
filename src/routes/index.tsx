import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from '../components/Main'
import { useAuth } from '../hooks/firebase/auth'

import App from './app.routes'
import Auth from './auth.routes'

const Routes: React.FC = () => {
    const {
        isLogged,
    } = useAuth()

    console.log(isLogged)
    return (
        <BrowserRouter>
            <Main>
                {isLogged ? <Auth /> : <App />}
            </Main>
        </BrowserRouter>
    )
}

export default Routes