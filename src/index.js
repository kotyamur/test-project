import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-final-project-test/">
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
