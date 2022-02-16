import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import StyleTheme from './assets/styles/StyleTheme';
import GlobalStyle from './assets/styles/GlobalStyle';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={StyleTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
