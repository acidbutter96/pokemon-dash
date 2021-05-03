import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'

const Auth: React.FC = () => {

    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact>
                <Redirect to="/" />
            </Route>
            <Route path='/pokedex' exact component={Pokedex} />
        </Switch>
    )
}

export default Auth