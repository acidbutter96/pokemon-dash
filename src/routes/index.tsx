import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/firebase/auth'


import App from './app.routes'
import Auth from './auth.routes'

const Routes: React.FC = () => {
    const {
        isLogged,
    } = useAuth()

    return (
        <BrowserRouter>
            {false ? <Auth /> : <App />}
        </BrowserRouter>
    )
}

export default Routes