import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import PokemonAttributes from '../pages/PokemonAttributes'
import PrivacyPolicy from '../pages/PrivacyPolicy'

const Auth: React.FC = () => {

    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact>
                <Redirect to="/" />
            </Route><Route path='/signin' exact>
                <Redirect to="/" />
            </Route>
            <Route path='/pokedex' exact component={Pokedex} />
            <Route path='/pokemon/attributes/:id' exact component={PokemonAttributes} />
            <Route path='/privacy-police' exact component={PrivacyPolicy} />
            <Route path='*'>
                <Redirect to='/' />
            </Route>
        </Switch>
    )
}

export default Auth