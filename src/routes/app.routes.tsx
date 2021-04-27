import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../components/Main';
import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';

const App: React.FC = () => {
    return (
        <Main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokedex" exact component={Pokedex} />
            </Switch>
        </Main>
    )
}

export default App;