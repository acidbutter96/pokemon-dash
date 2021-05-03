import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Main from '../components/Main'
import { useAuth } from '../hooks/firebase/auth'

import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'

const Auth: React.FC = () => {

    const {
        isLogged,
    } = useAuth()

    return (
        <Main>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact>
                    <Redirect to="/" />
                </Route>
                <Route path='/pokedex' exact component={Pokedex} />
            </Switch>
        </Main>
    )
}

export default Auth