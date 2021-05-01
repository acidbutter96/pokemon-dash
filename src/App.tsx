import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'

import Header from './components/Header'
import Routes from './routes'
import PokemonContextProvider from './hooks/pokemon'


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <PokemonContextProvider>
        <GlobalStyles />
        <header>
          <Header />
        </header>
        <Routes />
      </PokemonContextProvider>
    </ThemeProvider>
  )
}

export default App
