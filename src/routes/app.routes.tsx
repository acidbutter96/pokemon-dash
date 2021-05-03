import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/firebase/auth'
/* import { useLocationRef } from '../hooks/location' */

import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import SignIn from '../pages/SignIn'

const App: React.FC = () => {
    const {
        isLogged,
    } = useAuth()

    console.log(isLogged)

    return (

        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={isLogged ? Home : Login} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/privacy-police' exact component={PrivacyPolicy} />

            <Route path='/pokedex' exact>
                <Redirect to='/' />
            </Route>
            <Route path='*'>
                <Redirect to='/' />
            </Route>
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