import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import light from './styles/themes/light';

import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <div>
        <Header />

      </div>
    </ThemeProvider>
  );
}

export default App;
