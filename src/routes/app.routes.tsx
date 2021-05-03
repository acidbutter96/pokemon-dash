import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/firebase/auth'
/* import { useLocationRef } from '../hooks/location' */

import Home from '../pages/Home'
import Login from '../pages/Login'

const App: React.FC = () => {
    const {
        isLogged,
    } = useAuth()

    return (

        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={isLogged ? Home : Login} />
            {!isLogged ? <></> : <Route path='/pokedex' exact><Redirect to="/" /></Route>}
        </Switch>

    )
}

export default App

/* export const ChangeLocation = (): void => {
    const {
        listenLocation,
    } = useLocationRef()

    let actualLocation = useLocation()

    useEffect(() => {
        console.log(actualLocation.pathname)
        listenLocation(actualLocation.pathname)
    }, [actualLocation, listenLocation])
} */