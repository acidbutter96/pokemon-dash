import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'

import Header from './components/Header'
import Routes from './routes'

import PokemonContextProvider from './hooks/pokemon'
import AuthContextProvider from './hooks/auth'


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <AuthContextProvider>
        <PokemonContextProvider>
          <GlobalStyles />
          <header>
            <Header />
          </header>
          <Routes />
        </PokemonContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
