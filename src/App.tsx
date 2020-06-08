import React, { useReducer } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import GlobalStyle from '~/styles/global';
import { AuthContext } from './hooks/AuthContext';
import { initialState, reducer } from './store/reducer';

import Routes from '~/routes';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Routes />
          <GlobalStyle />
        </StylesProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
