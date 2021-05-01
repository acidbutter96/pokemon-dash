import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Main from '../components/Main'

import App from './app.routes'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Main>
                <App />
            </Main>
        </BrowserRouter>
    )
}

export default Routes