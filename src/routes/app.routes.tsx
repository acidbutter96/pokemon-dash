import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Main from '../components/Main'
import { useAuth } from '../hooks/firebase/auth'

import Home from '../pages/Home'
import Login from '../pages/Login'

const App: React.FC = () => {
    const {
        isLogged,
    } = useAuth()

    return (
        <Main>
            <Switch>
                <Route path='/' exact component={Home} />
                {!isLogged ? <></> : <Route path='/login' exact component={Login} />}
                {!isLogged ? <></> : <Route path='/pokedex' exact><Redirect to="/" /></Route>}

            </Switch>
        </Main>
    )
}

export default App