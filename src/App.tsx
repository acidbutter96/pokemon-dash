import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import light from './styles/themes/light';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default App;
