
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './app/store';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import blue from '@mui/material/colors/blue';

import App from './App';
import Home from './features/home/Home';
import Countries from './features/countries';
import { Counter } from './features/counter/Counter';

import './index.css';

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: blue,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="countries" element={<Countries />} />
                <Route path="counter" element={<Counter />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
