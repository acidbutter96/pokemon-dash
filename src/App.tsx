import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'

import Header from './components/Header'
import Main from './components/Main'
import Routes from './routes'

import PokemonContextProvider from './hooks/pokemon'
import AuthContextProvider from './hooks/firebase/auth'
import FireStoreProvider from './hooks/firebase/firestore'
import LocationProvider from './hooks/location'


const App: React.FC = () => {
  return (
    <FireStoreProvider>
      <LocationProvider>
        <ThemeProvider theme={light}>
          <AuthContextProvider>
            <PokemonContextProvider>
              <GlobalStyles />
              <header>
                <Header />
              </header>
              <Main>
                <Routes />
              </Main>
            </PokemonContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </LocationProvider>
    </FireStoreProvider>
  )
}

export default App
