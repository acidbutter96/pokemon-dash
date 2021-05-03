import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../components/Main'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Pokedex from '../pages/Pokedex'

const App: React.FC = () => {
    return (
        <Main>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/pokedex' exact component={Pokedex} />
            </Switch>
        </Main>
    )
}

export default App