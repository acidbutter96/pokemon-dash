import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import light from './styles/themes/light';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <header>
        <Header />
      </header>
      <Routes />
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default App;
